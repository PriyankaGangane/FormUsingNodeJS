const Form = require("../models/formModel");

// Handle form submission
exports.submitForm = async (req, res) => {
    try {
        const { name, email, mobile, dob, message } = req.body;
        const newForm = new Form({ name, email, mobile, dob, message });
        await newForm.save();
        res.status(201).json({ message: "Form submitted successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Failed to submit form" });
    }
};

// Get all form submissions
exports.getSubmissions = async (req, res) => {
    try {
        const forms = await Form.find();
        res.json(forms);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
};
