const express = require('express');
const db = require('../Database/db');
const router = express.Router();

router.get('/', (req, res) => {
    const sql = 'SELECT * FROM tbl_breakfast';
    db.query(sql, (err, result) => {
        if (err) {
            console.log("Error in backend");
            return res.status(500).json({ error: "Error while fetching data" });
        }
        return res.status(200).json(result);
    });
});

module.exports = router;