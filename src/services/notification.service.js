const nodemailer = require('nodemailer');

module.exports = {
    sendEmail: async (name) => {
        try {
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
                subject: `Birthday Reminder: ${name}`, // Subject line
                html: `Hello Alok, <br /> I understand you are busy with your work but please arrange some time to send your wishes to <b>${name}</b>. <br /> <br /> -- Your well wisher ♥`, // html body
            });
            console.info("Email sent Successful!");
        } catch (error) {
            console.error('notification.js', error);
        }
    },
};