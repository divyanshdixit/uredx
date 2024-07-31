const jwt = require("jsonwebtoken");

const refreshTokenMiddleware = async (req, res, next) => {
  const token = req.cookies.jwttoken;
  if (!token) {
    const refreshToken = req.cookies.refreshtoken;
    if (!refreshToken) {
      return res
        .status(401)
        .json({ message: "Access Denied! No token provided!", refresh: false });
    }
    const decode = await jwt.verify(
      refreshToken,
      process.env.REFRESH_SECRET_KEY
    );
    const newAccessToken = await jwt.sign(
      { teacherId: decode.teacherId },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );
    res.cookie("jwttoken", newAccessToken, {
      httpOnly: true,
      expires: new Date(Date.now() + 60 * 60 * 1000), // 1hr
    });
  }
  const decode = jwt.verify(token, process.env.SECRET_KEY);
  console.log(decode);
  if (!decode) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
};

module.exports = refreshTokenMiddleware;