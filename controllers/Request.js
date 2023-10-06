const Request = require("../models/RequestSchema.js");

const RequestId = async (req, res) => {
  try {
    const request = await Request.findById(req.params.requestId);
    res.status(200).json(request);
  } catch (err) {
    res.json({ message: err });
  }
};

const RequestAll = async (req, res) => {
  try {
    const request = await Request.find();
    res.status(200).json(request);
  } catch (err) {
    res.json({ message: err });
  }
};

const RequestAdd = async (req, res) => {
  try {
    const request = new Request(req.body);
    const savedRequest = await request.save();
    res.status(200).json(savedRequest);
  } catch (err) {
    res.json({ message: err });
  }
};

const RequestDelete = async (req, res) => {
  try {
    const removedRequest = await Request.findByIdAndDelete({
      _id: req.params.requestId,
    });
    res.status(200).json(removedRequest);
  } catch (err) {
    res.json({ message: err });
  }
};

const RequestAccept = async (req, res) => {
  try {
    const from = req.body.from;
    const to = req.body.to;
    const caseNumber = req.body.caseNumber;
    const response = req.body.response;
    const request = await Request.find({
      from: from,
      to: to,
      caseNumber: caseNumber,
    });
    request.response = response;
    const savedRequest = await Request.findByIdAndUpdate(request._id, request, {
      new: false,
    });
    res.status(200).json(savedRequest);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = {
  RequestId,
  RequestAll,
  RequestAdd,
  RequestDelete,
  RequestAccept,
};
