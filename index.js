const express = require("express");
const app = express();
const db = require("./db.js");
// const PORT = process.env.PORT;
const PORT = process.env.PORT || 5000;
let cors = require("cors");
app.use(cors());

const AuthController = require("./controller/AuthContoller");
app.use("/api/auth", AuthController);

app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});
