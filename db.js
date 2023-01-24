let mongoose = require("mongoose");
require("dotenv").config();
// mongoose.connect(`${process.env.MongoURL}`);
mongoose.connect(
  "mongodb+srv://test:test123@cluster0.prgajkd.mongodb.net/?retryWrites=true&w=majority"
);
// mongoose.connect("mongodb://localhost:27017/healthkart");
