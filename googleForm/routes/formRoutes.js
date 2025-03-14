const express = require("express");
const { submitForm, getSubmissions } = require("../controllers/formController");

const router = express.Router();

router.post("/submit", submitForm);
router.get("/submissions", getSubmissions);

module.exports = router;
