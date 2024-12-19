const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Create - 新增學生
router.post('/', async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Read - 取得所有學生
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update - 更新學生資料
router.put('/:id', async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedStudent);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete - 刪除學生
router.delete('/:id', async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.json({ message: 'Student deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;