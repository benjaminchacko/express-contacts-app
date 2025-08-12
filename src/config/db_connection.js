const mongoose = require("mongoose");
const { logger } = require('#logger')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION);
        logger.info('Connected to MongoDB');
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
};

exports.connectDB = connectDB;