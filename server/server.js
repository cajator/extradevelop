const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

let transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/send-email', async (req, res) => {
  console.log('Požadavek na odeslání e-mailu přijat:', req.body);
  const { name, email, phone, subject, message, recaptchaToken } = req.body;

  try {
    console.log('Ověřuji reCAPTCHA...');
    const recaptchaResponse = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`
    );
    
    if (!recaptchaResponse.data.success) {
      console.log('reCAPTCHA ověření selhalo:', recaptchaResponse.data);
      return res.status(400).json({ error: 'reCAPTCHA verification failed' });
    }
    console.log('reCAPTCHA ověřena úspěšně');

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Nová zpráva: ${subject}`,
      text: `
        Jméno: ${name}
        Email: ${email}
        Telefon: ${phone}
        Zpráva: ${message}
      `,
    };

    console.log('Odesílám e-mail...');
    await transporter.sendMail(mailOptions);
    console.log('E-mail úspěšně odeslán');
    res.status(200).json({ message: 'Email byl úspěšně odeslán' });
  } catch (error) {
    console.error('Chyba při odesílání e-mailu:', error);
    res.status(500).json({ error: 'Došlo k chybě při odesílání e-mailu', details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server běží na portu ${PORT}`);
});