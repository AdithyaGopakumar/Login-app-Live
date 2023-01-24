const express = require("express");
const app = express();
const db = require("./db.js");
// require("dotenv").config();
let cors = require("cors");
app.use(cors());

const port = 5000;

const AuthController = require("./controller/AuthContoller");
app.use("/api/auth", AuthController);

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
// app.listen(process.env.PORT, () =>
//   console.log(`Server running on port ${process.env.PORT}`)
// );
