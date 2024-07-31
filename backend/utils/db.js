const mongoose = require("mongoose");
require('dotenv').config();

mongoose
.connect(process.env.DATABASE_URL)
.then(() => {
  console.log("connected successfully...");
})
.catch((error) => {
  console.log("Not connected", error);
});

// console.log(conn);

// module.exports = conn;