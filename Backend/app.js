const express = require("express");
const app = express();
const dotEnv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const router = require("./routes/user-router");
const Staff = require("./routes/staff-routes");
const Case = require("./routes/case-router");
dotEnv.config();
// app.use(express.json()); //to parse json data from request body
app.use(bodyParser.urlencoded({ extended: false })); //To Parse the url encoded data
app.use(bodyParser.json());

app.use(router);
app.use(Staff);
app.use(Case);

//connecting to the database
const connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Database Connected Successfully 😍");
  } catch (error) {
    console.log(`Error Connecting Database 🤬: ${error}`);
  }
};
connect();
app.listen(PORT, () => {
  console.log(`server running at port:https://localhost:${PORT} `);
});
