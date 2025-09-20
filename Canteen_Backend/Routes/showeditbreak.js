const express = require('express');
const db = require('../Database/db');
const router = express.Router();

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM tbl_breakfast WHERE id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Error while showing" });
        }
        return res.status(200).json(result[0]);
    })

})

module.exports = router;
