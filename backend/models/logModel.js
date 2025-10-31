const mongoose = require('mongoose');
const LogSchema = new mongoose.Schema({
    TimeStamp: {
        type: Date,
        required: true,
    },
    Host: {
        type: String,
        required: true,
    },
    Status: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Log', LogSchema, 'statuslogs');