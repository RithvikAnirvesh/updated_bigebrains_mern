// backend-contact-form/utils/sendMail.js
const nodemailer = require('nodemailer');

const sendMail = async (recipientEmail, fullName, phone) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipientEmail,
    subject: "Your Free IT Consultation is Scheduled",
    html: `
      <p>Hi ${fullName},</p>
      <p>Thanks for reaching out! Your consultation has been scheduled.</p>
      <p>Join the call here: <a href="https://meet.google.com/lookup/example-meet-link">Google Meet Link</a></p>
      <p>We'll also follow up at: <strong>${phone}</strong></p>
      <p>Best,<br/>BigBrains Team</p>
    `
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendMail;
// export default sendMail;
