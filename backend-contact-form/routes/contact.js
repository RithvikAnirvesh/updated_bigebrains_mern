// backend-contact-form/routes/contact.js
const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');

// Route for contact form submission
router.post('/api/contact', contactController.submitContact);

module.exports = router;
