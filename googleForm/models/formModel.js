const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    dob: { type: Date, required: true },
    message: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Form", formSchema);
