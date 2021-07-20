const { Router } = require('express');
const router = Router();
const User = require('../models/user.model');

// This route will add new friend to the list of Birthday Reminder collection
router.post('/add', async (req, res) => {
    let newFriend = new User(req.body);
    newFriend = await newFriend.save();
    res.status(201).json(newFriend);
});

module.exports = router;