
const express = require('express');
const router = express.Router();
const connectdb = require('../connectdb');

router.get('/', (req, res) => {
    connectdb.query('SELECT * FROM employees', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

module.exports = router;
