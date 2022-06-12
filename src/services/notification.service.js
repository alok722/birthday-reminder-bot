const nodemailer = require('nodemailer');
const Quote = require('inspirational-quotes');

module.exports = {
    sendEmail: async (name) => {
        try {
            const randomQuote = Quote.getRandomQuote()
            const subject = name === 'Test User' ? 'No Birthday for Today' : `Birthday Reminder: ${name}`;
            const body = name === 'Test User' ? `${randomQuote}` : `Hello Alok, <br /> Send your wishes to <b>${name}</b>. <br /> <br /> -- Your well wisher ♥`;
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL,
                    pass: process.env.PASSWORD,
                },
            });
            await transporter.sendMail({
                from: "bot@gmail.com", // sender address
                to: 'alokr417@gmail.com', // list of receivers
                subject, // Subject line
                html: body, // html body
            });
            console.info("Email sent Successful!");
        } catch (error) {
            console.error('notification.js', error);
        }
    },
};