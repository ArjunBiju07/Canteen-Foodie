const express = require('express');
const db = require('../Database/db');
const router = express.Router();

router.post('/', (req, res) => {
    const { del_id } = req.body;
    const sql = 'DELETE FROM tbl_lunch WHERE id = ?';
    db.query(sql, [del_id], (err, result) => {
        if (err) {
            return res.status(500).send({ error: "Error while deleting" });
        }
        return res.status(200).send({ message: "Deleted successfully" });
    })
})

module.exports = router;