const Users = require("../UsersSchema");
const jwt = require("jsonwebtoken");
const cookie = require("cookie");

const Userlogin = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    Users.findOne({ email: email }).then((user) => {
      if (!user) {
        res.status(404).json({ message: "User not found" });
      }
      if (user.password === password) {
        const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);

        res
          .status(200)
          .cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
          })
          .json({ message: "Login Successful", User: user });
      } else {
        res.status(400).json({ message: "Password Incorrect" });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const Userregister = async (req, res) => {
  try {
    const user = await Users.create(req.body);
    res
      .status(200)
      .json({ message: "User registered successfully", User: user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { Userlogin, Userregister };
