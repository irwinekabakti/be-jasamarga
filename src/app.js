require('dotenv').config()
const express = require('express');
const app = express();
const morgan = require('morgan');
const employeeRoutes = require('./routes/employee');
const employeeProfRoutes = require('./routes/employeeProfile');
const educationRoutes = require('./routes/education');
const employeeFamilyRoutes = require('./routes/employeeFamily');
const employeeDataRoutes = require('./routes/employeeReport')

app.use(morgan('dev'))
app.use(express.json());

//Routes handle requests
app.use('/employee', employeeRoutes);
app.use('/employeeProfile', employeeProfRoutes);
app.use('/education', educationRoutes);
app.use('/employeeFamily', employeeFamilyRoutes);
app.use('/employeeData', employeeDataRoutes);
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;