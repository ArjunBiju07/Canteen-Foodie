const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",       // default MySQL user
    password: "",       // your MySQL root password (empty if none)
    database: "canteen" // make sure this DB exists
});

// Connect and log any errors
db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err.message);
    } else {
        console.log("Connected to MySQL database ✅");
    }
});

module.exports = db;
