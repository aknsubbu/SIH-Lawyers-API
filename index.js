const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

//import routes
const lawyersRoutes = require("./routes/LawyersRoutes.js");
const rehabilitationCoursesRoutes = require("./routes/RehabilitationCoursesRoutes.js");
const UserRoutes = require("./routes/UserRoutes.js");
const RequestRoutes = require("./routes/RequestRoutes.js");

dotenv.config();

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect to db
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;
mongoose.connection.on("connected", () => {
  console.log("Connected to mongoDB");
});

//test if online
app.get("/isOnline", (req, res) => {
  res.send("Server is online and running");
});

//routes
app.use("/lawyers", lawyersRoutes);
app.use("/rehabilitationCourses", rehabilitationCoursesRoutes);
app.use("/users", UserRoutes);
app.use("/requests", RequestRoutes);

//listen
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
