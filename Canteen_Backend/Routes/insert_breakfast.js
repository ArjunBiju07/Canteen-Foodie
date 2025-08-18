const express = require('express');
const db = require('../Database/db');
const router = express.Router();

router.post('/', (req, res) => {
    const { food, price } = req.body;
    const sql = 'INSERT INTO tbl_breakfast (food,price) VALUES (?, ?)';
    db.query(sql, [food, price], (err, result) => {
        if (err) {
            console.error("Error inserting breakfast item:", err);
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(201).json({ message: 'Breakfast item inserted successfully', id: result.insertId });
    });
});
module.exports = router;
