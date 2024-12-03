const express = require('express');
const EmployeeController = require('../controller/employee')

const router = express.Router();

//Read Employee Data
router.get('/', EmployeeController.getAllEmployee);

//Read Employee Data by id
router.get('/:employeeId', EmployeeController.getEmployee);

//Create Employee
router.post('/', EmployeeController.createNewEmployee);

//Update Employee
router.patch('/:employeeId', EmployeeController.updateEmployee);

//Delete Employee
router.delete('/:employeeId', EmployeeController.deleteEmployee);

module.exports = router;