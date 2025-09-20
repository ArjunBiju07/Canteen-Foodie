const express = require('express');
const db = require('../Database/db');
const router = express.Router();

router.post('/', (req, res) => {
    const { food, price, id } = req.body;

    const sql = "UPDATE tbl_breakfast SET food = ?, price = ? WHERE id = ?";
    db.query(sql, [food, price, id], (err, result) => {
        if (err) return res.status(500).json({ error: "Error while updating" });
        console.log(result); // check affectedRows
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "No record found with that ID" });
        }
        return res.status(200).send({ message: "Updated Successfully" });
    })

})

module.exports = router;