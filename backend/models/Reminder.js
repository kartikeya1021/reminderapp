//Reminder modal schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ReminderSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    date: {
        type: Date,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    isActivated: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});
module.exports = mongoose.model('Reminder', ReminderSchema);
