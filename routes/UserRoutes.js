const express = require("express");
const router = express.Router();
const Users = require("../models/UsersSchema.js");
const {
  UsersId,
  UsersAll,
  UsersAdd,
  UsersDelete,
  UsersUpdate,
  UsersCheck,
} = require("../controllers/Users.js");

router.get("/all", UsersAll);
router.get("/:userId", UsersId);
router.post("/add", UsersAdd);
router.delete("/delete/:userId", UsersDelete);
router.patch("/update/:userId", UsersUpdate);
router.post("/check/:userId", UsersCheck);

module.exports = router;
