const User = require('../models/user.model');
const { sendEmail } = require('./notification.service');

module.exports = {
    cronService: async () => {
        try {
            // Extracting tomorrow's date in 'DD/M' format
            const todayDate = `${new Date().getDate() + 1}/${new Date().getMonth() + 1}`;
            // Getting all those friends name whose birthday is tomorrow
            const friend = await User.find({ dob: todayDate });
            if (friend.length !== 0) {
                for (const iterator of friend) {
                    // Iterating over each name and triggering reminder email
                    await sendEmail(iterator.name);
                }
            } else {
                await sendEmail('Test User');
                console.info("No birthday for today.", todayDate);
            }
        } catch (error) {
            console.error('cron-service.js', error);
        }
    },
};