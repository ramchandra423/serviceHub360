// Import the Nodemailer library
const nodemailer = require('nodemailer');

// Create a transporter using SMTP transport

const sendEmail=(name, email, subject, message) => {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'ramchandrarout319@gmail.com',
            pass: 'dxlp kudc eufb gvmr',
        }
    });

    // Email data
    const mailOptions = {
        from: 'ramchandrarout319@gmail.com',  //organization mail
        to: 'ramchandrarout2001@gmail.com',   // Customer service Department
        subject: `${subject}`,
        text: `Name : ${name}.\nEmail : ${email}\n\nMessage : ${message}`,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

module.exports = sendEmail;