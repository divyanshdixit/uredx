import { useState } from "react";
import "../Scss/Login.scss";
import { Link } from "react-router-dom";

export default function Login() {
  const [emailormobile, setemailOrmobile] = useState("");
  const [password, setPassword] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="login_container">
        <div className="form_wrapper">
          <form action="" onSubmit={submitHandle}>
            <div className="col1">
              <img src="/loginimg.png" alt="" />
            </div>
            <div className="col2">
              <div className="content">
                <h1>Login</h1>
                <div className="email_div">
                  <label htmlFor="email_mobile">Email or Mobile no.</label>
                  <input
                    type="text"
                    placeholder="Email or Mobile no"
                    value={emailormobile}
                    onChange={(e) => setemailOrmobile(e.target.value)}
                    required
                  />
                </div>
                <div className="password_div">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    required
                  />
                </div>
                <div className="forgot_div">
                  <div className="remember_me">
                    <input type="checkbox" />
                    <label htmlFor="password">Remember me</label>
                  </div>
                  <p>
                    <Link to="/sendmail" id="forgot_p">
                      Forgot password?
                    </Link>
                  </p>
                </div>
                <button id="login">
                  <Link to="/" id="login_btn">
                    Submit
                  </Link>
                </button>
                <div className="fb_google">
                  <button id="fb">Login with facebook</button>
                  <button id="google">Login with Google</button>
                </div>
                <p>
                  <span>Create an account</span>
                  <Link to="/signup" id="signup_btn">
                    Signup
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
