const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    completedLessons: {
        type: String, // Or you can use Number if it represents a count
        default: '0' // Assuming it's initialized as '0'
    },
    // Add other fields as needed
});

const Progress = mongoose.model('Progress', progressSchema);

module.exports = Progress;
