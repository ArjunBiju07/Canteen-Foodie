const express = require('express');
const db = require('../Database/db');
const router = express.Router();

router.get('/', (req, res) => {
    const sql = "SELECT * FROM tbl_evening";
    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).send({error:"Error while fetching snacks"});
        }
        return res.status(200).json(result);
    })
})

module.exports = router;