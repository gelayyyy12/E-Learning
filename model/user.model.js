const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId : Number,
    userName: String,
    instructorId: 
            [{ type: 
                      mongoose.Schema.Types.ObjectId, ref: 'Role'}],
});

module.exports = mongoose.model('User', userSchema);