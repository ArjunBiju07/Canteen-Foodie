const express = require('express');
const db = require('../Database/db');
const router = express.Router();

router.get('/', (req, res) => {
    const sql = "SELECT * FROM tbl_lunch";
    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({ error: "Error while fetching data" });
        }
        return res.status(200).send(result)

    });

});

module.exports=router;