// Import necessary modules
import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import hbs from 'nodemailer-express-handlebars';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config();

// Get the equivalent of `__dirname` for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'images'))); // Serve static files like images

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.Email_User, // Gmail address
    pass: process.env.Email_Password, // Gmail App Password
  },
});

// Verify transporter configuration
transporter.verify((error) => {
  if (error) {
    console.error('Error verifying transporter:', error);
  } else {
    console.log('Server is ready to send emails.');
  }
});

// Handlebars configuration
const handlebarOptions = {
  viewEngine: {
    extName: '.handlebars', // File extension
    partialsDir: path.resolve(__dirname, 'images'), // Path to Handlebars templates
    defaultLayout: false, // No default layout
  },
  viewPath: path.resolve(__dirname, 'images'), // Path to template folder
  extName: '.handlebars', // File extension for templates
};

// Use Handlebars as the email template engine
transporter.use('compile', hbs(handlebarOptions));


// API endpoint for sending email
app.post('/api/send', (req, res) => {  
  const rec_values1 = req.body;

  // Mail to the admin with the user's inquiry details
  const mailContent2 = {
    from: process.env.Email_User,
    to: process.env.Email_User, // Admin email address
    subject: rec_values1.sub,
    text: '', // Plain text fallback
    context: { rec_values1 }, // Variables for the template
    attachments: [
      {
        filename: 'Nexigo.png',
        path: path.join(__dirname, 'images', 'Nexigo.png'),
        cid: 'nexigo', // Inline Content-ID for embedding
      },
      {
        filename: 'mailbg.png',
        path: path.join(__dirname, 'images', 'mailbg.png'),
        cid: 'mailbg', // This ID should match 'cid:mailbg' in the template
    },
    ],
    template: 'client_contact_Form1', // Template filename (without extension)
  };



  // Confirmation email to the user
  const mailContent3 = {
    from: process.env.Email_User,
    to: rec_values1.email1, // User's email
    subject: 'Nexigo Contact Confirmation',
    context: { rec_values1 }, // Variables for the template
    attachments: [

      {
        filename: 'Nexigo.png',
        path: path.join(__dirname, 'images', 'Nexigo.png'),
        cid: 'nexigo', // Inline Content-ID for embedding
      },
      {
        filename: 'received.png',
        path: path.join(__dirname, 'images', 'received.png'),
        cid: 'img_thank', // Inline Content-ID for embedding
      },
      {
        filename: 'mailbg.png',
        path: path.join(__dirname, 'images', 'mailbg.png'), // Correct path to the image
        cid: 'mailbg', // CID to reference in the email body
      },
    ],
    template: 'mailreceive1', // Template filename (without extension)
  };

  // Send the first email to admin
  transporter.sendMail(mailContent2, (err) => {
    if (err) {
      console.error('Error sending email to admin:', err);
      return res.status(500).json({ status: 'fail', error: err.message });
    }

    // Send the confirmation email to the user
    transporter.sendMail(mailContent3, (err) => {
      if (err) {
        console.error('Error sending confirmation email to user:', err);
        return res.status(500).json({ status: 'fail', error: err.message });
      }

      res.json({ status: 'success' });
    });
  });
});


// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the email API');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
