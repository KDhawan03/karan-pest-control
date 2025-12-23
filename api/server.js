import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});


app.post('/send-email', async (req, res) => {
  try {
    const { name = 'N/A', phone = 'N/A', email = 'N/A', service = 'N/A', message = '' } = req.body;
    
    console.log('📥 Received:', { name, phone, email, service, message });
    
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `🪳 Quote: ${name} - ${service}`,
      html: `
        <h3>New Query by ${name} - service(${service}) </h3>
        <h4>Customer Details:</h4>
        <p><strong>👤 Name:</strong> ${name}</p>
        <p><strong>📱 Phone:</strong> <span style="color: green; font-size: 15px;">${phone}</span></p>
        <p><strong>✉️ Email:</strong> ${email}</p>
        <p><strong>🎯 Service:</strong> <span style="color: #299B46; font-size: 15px; font-weight: bold;">${service}</span></p>
        <p><strong>💬 Message:</strong> ${message || 'No message'}</p>
        <hr>
        <p><strong>⏰ Submitted:</strong> ${new Date().toLocaleString('en-IN')}</p>
        <p style="color: green; font-size: 15px; font-weight: bold;">Please contact the customer as soon as possible !</p>
      `,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nService: ${service}\nMessage: ${message}`  // Backup plain text
    });
    
    console.log('Email SENT with full details!');
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email Error:', error.message);
    return res.status(500).json({ error: 'Failed to send email' });
  }
});

export default app;

if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT);
}
