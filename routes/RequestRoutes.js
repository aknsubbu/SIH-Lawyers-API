const {
  RequestId,
  RequestAll,
  RequestAdd,
  RequestDelete,
  RequestAccept,
} = require("../controllers/Request.js");
const express = require("express");
const router = express.Router();

router.get("/all", RequestAll);
router.get("/:requestId", RequestId);
router.post("/add", RequestAdd);
router.delete("/delete/:requestId", RequestDelete);
router.post("/accept", RequestAccept);

module.exports = router;
