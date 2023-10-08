const Case = require("../CasesSchema.js");

const casesAll = async (req, res) => {
    try {
        const cases = await Case.find();
        res.status(200).json(cases);
    } catch (err) {
        res.status(500).json({ message: err });
    }
    };

const caseByCNR = async (req, res) => { 
    try {
        const single_case = await Case.find({'details.cnrNumber': req.params.casenumber});
        res.status(200).json(single_case);
    } catch (err) {
        res.status(500).json({ message: err });
    }
    }

const addCase = async (req, res) => {
    try {
        console.log(req.body);
        const single_case = new Case(req.body);
        const savedCase = await single_case.save();
        res.status(200).json(savedCase);
    } catch (err) {
        res.status(500).json({ message: err });
    }
    }

const deleteCase = async (req, res) => {
    try {
        const removedCase = await Case.findByIdAndDelete({
        _id: req.params.caseId,
        });
        res.status(200).json(removedCase);
    } catch (err) {
        res.status(500).json({ message: err });
    }
    }

const updateCase = async (req, res) => {
    try {
        const updatedCase = await Case.updateOne(
        { _id: req.params.caseId },
        { $set: { ...req.body } }
        );
        if (!updatedCase) {
            return res.status(404).json({ message: "Case not found" });
          }
        res.status(200).json(updatedCase);
    } catch (err) {
        res.status(500).json({ message: err });
    }
    }

const casesByCategory = async (req, res) => {
    try {
        const cases = await Case.find({ category: req.params.category });
        res.status(200).json(cases);
    } catch (err) {
        res.status(500).json({ message: err });
    }
    }

const casesByPetitioner = async (req, res) => {
        try {
            const cases = await Case.find({ 'petitionerAndAdvocate.petitioner': req.params.petitionerName });
            res.json(cases);
        } catch (err) {
            res.json({ message: err });
        }
    }

const casesByRespondent = async (req, res) => {
        try {
            const cases = await Case.find({ 'respondentAndAdvocate.respondent': req.params.respondentName });
            res.json(cases);
        } catch (err) {
            res.json({ message: err });
        }
    };

const casesByAdvocateName = async (req, res) => {
        try {
            const cases = await Case.find({
                $or: [
                    { 'petitionerAndAdvocate.advocate': req.params.advocateName },
                    { 'respondentAndAdvocate.advocate': req.params.advocateName }
                ]
            });
            res.json(cases);
        } catch (err) {
            res.json({ message: err });
        }
    }
    
const casesByStatusState = async (req, res) => {
        try {
            const cases = await Case.find({ 'status.state': req.params.status });
            res.json(cases);
        } catch (err) {
            res.json({ message: err });
        }
    }

module.exports = {
    casesAll,
    caseByCNR,
    addCase,
    deleteCase,
    updateCase,
    casesByCategory,
    casesByPetitioner,
    casesByRespondent,
    casesByAdvocateName,
    casesByStatusState
};