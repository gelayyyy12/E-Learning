const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
    userId : 
    { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    courseId: 
    { type: mongoose.Types.Schema.Types.ObjectId, ref: 'Course'},
    enrollemntDate: Date,
    status: string 

});

module.exports = mongoose.model('Enrollment', enrollmentSchema);