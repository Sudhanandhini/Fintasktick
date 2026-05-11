const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail', // or 'hotmail', 'yahoo', etc.
  auth: {
    user: process.env.EMAIL_USER, // Your email
    pass: process.env.EMAIL_PASS  // Your app password
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, loanType, amount, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'support@sunsys.in',
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Loan Type:</strong> ${loanType}</p>
      <p><strong>Amount:</strong> ${amount}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
    replyTo: email
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});



// popup form endpoint
app.post('/api/popup', async (req, res) => {
  const { name, email, phone, loanType, amount, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'support@sunsys.in',
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Loan Type:</strong> ${loanType}</p>
      <p><strong>Amount:</strong> ${amount}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
    replyTo: email
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});


// Product enquiry endpoint
app.post('/api/product-enquiry', async (req, res) => {
  const { name, phone, email, subject, selectedProducts } = req.body;

  const productList = (selectedProducts || []).map(p => `<li>${p}</li>`).join('');

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'support@sunsys.in',
    subject: `Product Enquiry: ${subject || 'New Enquiry'} from ${name}`,
    html: `
      <h2>New Product Enquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Interested Products:</strong></p>
      <ul>${productList}</ul>
    `,
    replyTo: email
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Enquiry sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send enquiry' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});