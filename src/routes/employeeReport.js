const express = require('express');
const EmployeeDataController = require('../controller/employeeReport')

const router = express.Router();

//Read Employee Data
router.get('/', EmployeeDataController.getEmployeeReport);
router.get('/:employeeId', EmployeeDataController.getEmployeeData);

module.exports = router;