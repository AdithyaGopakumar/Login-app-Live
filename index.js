const express = require("express");
const app = express();
const db = require("./db.js");
require("dotenv").config();
let cors = require("cors");
app.use(cors());

const PORT = process.env.PORT;

const AuthController = require("./controller/AuthContoller");
app.use("/api/auth", AuthController);

// app.listen(port, () => {
//   console.log(`listening to port ${port}`);
// });
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
