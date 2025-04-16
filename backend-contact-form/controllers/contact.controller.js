const contactService = require('../services/contact.service');

/**
 * Controller for handling contact form submissions
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const submitContact = async (req, res) => {
  const data = req.body;

  try {
    // Call the service function to handle business logic
    await contactService.processContactSubmission(data);
    
    res.status(200).json({ message: 'Submitted successfully' });
  } catch (err) {
    console.error('Error in contact controller:', err);
    res.status(500).json({ error: err.message || 'Internal server error' });
  }
};

module.exports = {
  submitContact
}; 