const {
  RequestId,
  RequestAll,
  RequestAdd,
  RequestDelete,
} = require("../controllers/Request.js");
const express = require("express");
const router = express.Router();

router.get("/all", RequestAll);
router.get("/:requestId", RequestId);
router.post("/add", RequestAdd);
router.delete("/delete/:requestId", RequestDelete);

module.exports = router;
