
const express = require('express');
const bodyParser = require('body-parser');
const employeesCtrl = require('./controllers/employeesCtrl');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/employees', employeesCtrl);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
