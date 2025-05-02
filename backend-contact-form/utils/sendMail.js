// backend-contact-form/utils/sendMail.js
const nodemailer = require('nodemailer');

const sendMail = async (recipientEmail, fullName, phone, formData) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  // Email to the client
  const clientMailOptions = {
    from: process.env.EMAIL_USER,
    to: recipientEmail,
    subject: "Thank you for contacting BigBrains",
    html: `
      <p>Hi ${fullName},</p>
      <p>Thank you for reaching out to BigBrains! We have received your contact submission.</p>
      <p>Our team will review your message and get back to you as soon as possible.</p>
      <p>We'll contact you at: <strong>${phone}</strong></p>
      <p>Best regards,<br/>BigBrains Team</p>
    `
  };

  // Email to the admin with client details
  const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Send to admin email
    subject: `New Contact Form Submission: ${fullName}`,
    html: `
      <h2>New Client Contact Details</h2>
      <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
      <p><strong>Company/Organization:</strong> ${formData.company || 'Not provided'}</p>
      <p><strong>Client Email:</strong> ${formData.email}</p>
      <p><strong>Client Phone:</strong> ${formData.phone}</p>
      <p><strong>Service Requested:</strong> ${formData.helpType}</p>
      <p><strong>Message:</strong></p>
      <p>${formData.message}</p>
    `
  };

  // Send both emails
  await transporter.sendMail(clientMailOptions);
  await transporter.sendMail(adminMailOptions);
};

module.exports = sendMail;
// export default sendMail;
