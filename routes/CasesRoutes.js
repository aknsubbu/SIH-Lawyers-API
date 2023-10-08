const express = require("express");
const {
  casesAll,
  caseByCNR,
  addCase,
  deleteCase,
  updateCase,
  casesByCategory,
  casesByAdvocateName,
casesByPetitioner,
    casesByRespondent,
    casesByStatusState
} = require("../controllers/Cases.js");

const router = express.Router();

router.get("/all", casesAll);
router.get("/:caseId", caseByCNR);
router.post("/add", addCase);
router.delete("/delete/:caseId", deleteCase);
router.put("/update/:caseId", updateCase);
router.get("/category/:category", casesByCategory);
router.get("/advocate/:advocateName", casesByAdvocateName);
router.get("/petitioner/:petitionerName", casesByPetitioner);
router.get("/respondent/:respondentName", casesByRespondent);
router.get("/status/:status", casesByStatusState);
