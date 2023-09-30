const RehabCourses = require("../RehabCourses.js");

const CoursesAll = async (req, res) => {
  const courses = await RehabCourses.aggregate([
    {
      $match: {},
    },
    {
      $lookup: {
        from: "RehabCourses",
        localField: "partnerInstitute",
        foreignField: "_id",
        as: "InstitueID",
      },
    },
  ]);
  console.log(courses);
  res.json(courses);
};

const IDCourses = async (req, res) => {
  const courses = await RehabCourses.aggregate([
    {
      $match: { _id: req.params._id },
    },
    {
      $lookup: {
        from: "RehabCourses",
        localField: "partnerInstitute",
        foreignField: "_id",
        as: "InstitueID",
      },
    },
  ]);
  console.log(courses);
  res.json(courses);
};

const CategoryCourses = async (req, res) => {
  const courses = await RehabCourses.aggregate([
    {
      $match: { category: req.params.category },
    },
    {
      $lookup: {
        from: "RehabCourses",
        localField: "partnerInstitute",
        foreignField: "_id",
        as: "InstitueID",
      },
    },
  ]);
  console.log(courses);
  res.json(courses);
};

const addCourses = async (req, res) => {
  try {
    console.log(req.body);
    const course = new RehabCourses(req.body);
    const savedCourse = await course.save();
    res.json(savedCourse);
  } catch (err) {
    res.json({ message: err });
  }
};

const deleteCourses = async (req, res) => {
  try {
    const removedCourse = await RehabCourses.findByIdAndDelete({
      _id: req.params._id,
    });
    res.json(removedCourse);
  } catch (err) {
    res.json({ message: err });
  }
};

const updateCourses = async (req, res) => {
  try {
    const courseID = req.params._id;
    const updatedData = req.body;
    const updatedCourse = await RehabCourses.findByIdAndUpdate(
      courseID,
      updatedData,
      { new: true }
    );
    res.json(updatedCourse);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = {
  CoursesAll,
  IDCourses,
  CategoryCourses,
  addCourses,
  deleteCourses,
  updateCourses,
};
