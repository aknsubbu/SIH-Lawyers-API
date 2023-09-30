const express = require("express");
const {
  CoursesAll,
  IDCourses,
  CategoryCourses,
  addCourses,
  deleteCourses,
  updateCourses,
} = require("../controllers/RehabilitationCoursesControllers");

//create router
const router = express.Router();

//routes
router.get("/all", CoursesAll);
router.get("/id/:_id", IDCourses);
router.get("/category/:category", CategoryCourses);
router.post("/add", addCourses);
router.delete("/delete/:_id", deleteCourses);
router.put("/update/:_id", updateCourses);

//export router
module.exports = router;
