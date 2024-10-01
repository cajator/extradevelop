const express = require('express');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5
});

app.use('/send-email', limiter);

app.post('/send-email', async (req, res) => {
  const { name, email, message, recaptchaToken } = req.body;

  // Ověření reCAPTCHA
  const recaptchaVerify = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=6Ldlf1QqAAAAAGzqKCqxtZwFzv-SvkmpKS4d21Nq&response=${recaptchaToken}`
  );

  if (!recaptchaVerify.data.success) {
    return res.status(400).json({ error: 'reCAPTCHA verification failed' });
  }

  // Konfigurace Nodemailer
  let transporter = nodemailer.createTransport({
    host: "adu05.vas-server.cz",
    port: 587,
    secure: false,
    auth: {
      user: "info@extradevelop.cz",
      pass: "Extra9800",
    },
  });

  try {
    await transporter.sendMail({
      from: '"Your Website" <info@extradevelop.cz>',
      to: "recipient@example.com",
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));