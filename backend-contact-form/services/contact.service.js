// backend-contact-form/services/contact.service.js
const Contact = require('../models/Contact');
const sendMail = require('../utils/sendMail');
const updateExcel = require('../utils/updateExcel');

/**
 * Service for processing contact form submissions
 * Contains all business logic for handling contact data
 */
const processContactSubmission = async (data) => {
  try {
    // Save contact to database
    const newContact = new Contact(data);
    await newContact.save();

    const fullName = `${data.firstName} ${data.lastName}`;

    // Send confirmation email
    await sendMail(data.email, fullName, data.phone);

    // Update Excel sheet with contact data
    updateExcel(data);

    return { success: true };
  } catch (error) {
    console.error('Error in contact service:', error);
    throw error; // Rethrow to be handled by controller
  }
};

module.exports = {
  processContactSubmission
}; 