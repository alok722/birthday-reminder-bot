const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cron = require('node-cron');
const morgan = require('morgan');
const routes = require('./routes/index');
const { cronService } = require('./services/cron.service');

const app = express();
const PORT = process.env.PORT || 3030;

// set up express
app.use(express.json());
app.use(morgan('dev'));
app.use('/api', routes);

app.use('/', (req, res) => {
    res.status(200).send('<h2 align="center">Welcome to BirthDay Reminder Bot</h2>');
});

mongoose.connect(
    process.env.MONGODB_CONNECTION_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.error(err)
        } else {
            console.log('MONGODB connected successfully!');
        };
    }
);

// Run the job daily at 11 PM
cron.schedule('*/2 * * * *', async () => {
    console.info("Node Server is up & running");
});

// Run the job daily at 11 PM
cron.schedule('1 9 * * *', async () => {
    console.info("CronJob Triggered!");
    console.info('email', process.env.EMAIL);
    console.info('password', process.env.PASSWORD);
    await cronService();
}, {
    scheduled: true,
    timezone: "Asia/Kolkata"
});

app.listen(PORT, () =>
    console.log(`Express server currently running on port 3030`)
);
