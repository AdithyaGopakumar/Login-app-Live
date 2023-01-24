let mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(`${process.env.MongoURL}`);
// mongoose.connect("mongodb://localhost:27017/healthkart");
