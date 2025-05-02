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
    // Try to save to database but don't block the whole process if it fails
    try {
      const newContact = new Contact(data);
      await newContact.save();
      console.log('Contact saved to database successfully');
    } catch (dbError) {
      console.error('Error saving to MongoDB, continuing with other operations:', dbError);
      // Continue processing even if MongoDB fails
    }

    const fullName = `${data.firstName} ${data.lastName}`;

    // Try to send email
    try {
      await sendMail(data.email, fullName, data.phone, data);
      console.log('Email sent successfully');
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      // Don't throw here, try to continue with Excel
    }

    // Try to update Excel
    try {
      updateExcel(data);
      console.log('Excel updated successfully');
    } catch (excelError) {
      console.error('Error updating Excel:', excelError);
    }

    return { success: true };
  } catch (error) {
    console.error('Error in contact service:', error);
    throw error; // Rethrow to be handled by controller
  }
};

module.exports = {
  processContactSubmission
}; 