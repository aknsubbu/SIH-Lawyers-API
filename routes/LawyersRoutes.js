//import controllers using require keyword
const express = require("express");
const {
  lawyersAll,
  lawyersById,
  lawyersReadable,
  addLawyers,
  deleteLawyers,
  updateLawyers,
  lawyersExpertise,
} = require("../controllers/Lawyers.js");

//create router
const router = express.Router();

//routes
router.get("/all", lawyersAll);
router.get("/readable", lawyersReadable);
router.get("/:lawyerId", lawyersById);
router.get("/expertise/:expertise", lawyersExpertise);
router.post("/add", addLawyers);
router.delete("/delete/:lawyerId", deleteLawyers);
router.put("/update/:lawyerId", updateLawyers);

//export router
module.exports = router;
