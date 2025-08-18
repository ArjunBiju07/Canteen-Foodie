const express = require('express');
const db = require('../Database/db');
const router = express.Router();

router.post('/', (req, res) => {
    const { food, price } = req.body;
    const sql = 'INSERT INTO tbl_lunch (food,price) VALUES(?,?)';
    db.query(sql, [food, price], (err, result) => {
        if (err) {
            console.error('Error while inserting lunch', err)
            return res.status(500).json({ error: "Database error" })
        }
        res.status(201).json({ message: 'Lunch item inserted successfully', id: result.insertId });
    })
})

module.exports = router;