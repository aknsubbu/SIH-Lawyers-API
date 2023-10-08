const mongoose = require('mongoose');

const caseSchema = new mongoose.Schema({
    casenumber: String,
  details: {
    fillingNumber: String,
    fillingDate: Date,
    registrationNumber: String,
    registrationDate: Date,
    cnrNumber: String,
  },
  status: {
    firstRegistrationDate: Date,
    decisionDate: Date,
    caseDetails: String,
    natureOfDisposal: String,
    coram: String,
    judicialBranch: String,
    state: String,
  },
  petitionerAndAdvocate: {
    petitioner: String,
    advocate: String,
  },
  respondentAndAdvocate: {
    respondent: String,
    advocate: String,
  },
  category: {
    category: String,
    subCategory: String,
  },
  historyOfHearings: [
    {
      causeListType: String,
      judge: String,
      businessOnDate: Date,
      hearingDate: Date,
      purposeOfHearing: String,
    },
  ],
  orders: [
    {
      orderNumber: String,
      orderOn: String,
      judge: String,
      orderDate: Date,
      orderDetails: String,
    },
  ],
});

const Case = mongoose.model('Case', caseSchema);

module.exports = Case;
