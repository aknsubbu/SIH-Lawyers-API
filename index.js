const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

dotenv.config();

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect to db
mongoose.connect(process.env.DB_CONNECT);

//test if online
app.get("/isOnline", (req, res) => {
  res.send("Server is oline and running");
});

//listen
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
