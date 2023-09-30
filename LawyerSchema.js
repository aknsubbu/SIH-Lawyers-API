const mongoose = require("mongoose");

const LawyerSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  contactDetails: [
    {
      email: { type: String, required: true },
      phone: { type: String, required: true },
    },
  ],
  expertise: { type: String, required: true },
  experience: [
    {
      time: { type: String, required: true },
      casesWon: { type: String, required: true },
      casesLost: { type: String, required: true },
    },
  ],
  location: { type: String, required: true },
  languagesKnown: [{ type: String, required: true }],
  rating: { type: String, required: true },
  cases: [{ type: mongoose.Schema.Types.ObjectId, required: false }],
  requestedCases: [{ type: mongoose.Schema.Types.ObjectId, required: false }],
});

module.exports = mongoose.model("Lawyer", LawyerSchema);
