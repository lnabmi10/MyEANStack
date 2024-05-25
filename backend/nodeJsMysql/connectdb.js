// db.js
const mysql = require('mysql');

// Create MySQL connection
const connectdb = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gestion_cabinet'
});

// Connect
connectdb.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

module.exports = connectdb;

