const Lawyer = require("../LawyerSchema.js");

const lawyersAll = async (req, res) => {
  try {
    const lawyers = await Lawyer.find();
    res.json(lawyers);
  } catch (err) {
    res.json({ message: err });
  }
};

const lawyersById = async (req, res) => {
  try {
    const lawyer = await Lawyer.findById(req.params.lawyerId);
    res.json(lawyer);
  } catch (err) {
    res.json({ message: err });
  }
};

const lawyersExpertise = async (req, res) => {
  try {
    const lawyer = await Lawyer.find({ expertise: req.params.expertise });
    res.json(lawyer);
  } catch (err) {
    res.json({ message: err });
  }
};

const lawyersReadable = async (req, res) => {
  try {
    res.send("Lawyers readable");
  } catch (err) {
    res.json({ message: err });
  }
};

const addLawyers = async (req, res) => {
  try {
    console.log(req.body);
    const lawyer = new Lawyer(req.body);
    const savedLawyer = await lawyer.save();
    res.json(savedLawyer);
  } catch (err) {
    res.json({ message: err });
  }
};

const deleteLawyers = async (req, res) => {
  try {
    const removedLawyer = await Lawyer.findByIdAndDelete({
      _id: req.params.lawyerId,
    });
    res.json(removedLawyer);
  } catch (err) {
    res.json({ message: err });
  }
};

const updateLawyers = async (req, res) => {
  try {
    const lawyerId = req.params.id;
    const updatedData = req.body;

    const updatedLawyer = await Lawyer.findByIdAndUpdate(
      lawyerId,
      updatedData,
      { new: true }
    );

    if (!updatedLawyer) {
      return res.status(404).json({ message: "Lawyer not found" });
    }

    res.json(updatedLawyer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = {
  lawyersAll,
  lawyersById,
  lawyersReadable,
  addLawyers,
  deleteLawyers,
  updateLawyers,
  lawyersExpertise,
};
