const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    student_id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    address: { type: String },
    enrolled_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Student', StudentSchema);