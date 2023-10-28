const express = require("express");

const { Userlogin, Userregister } = require("../controllers/Auth");

const router = express.Router();

router.post("/login", Userlogin);
router.post("/register", Userregister);

module.exports = router;
