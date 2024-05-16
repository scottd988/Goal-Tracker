const { Schema, model } = require('mongoose');

const goalSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please add a title"]
    },
    description: {
        type: String,
        required: [true, "Please add a description"]
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Goal', goalSchema);