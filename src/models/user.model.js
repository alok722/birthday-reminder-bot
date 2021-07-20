const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        dob: { type: String, required: true }, // DOB Format: D/M
    }
);

module.exports = mongoose.model('birthdayReminder', userSchema);