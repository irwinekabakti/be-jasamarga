const express = require('express');
const EmployeeFamilyController = require('../controller/employeeFamily');

const router = express.Router();

//Read Education Data
router.get('/', EmployeeFamilyController.getAllEmployeeFamily);

//Read Education Data by id
router.get('/:employeeFamilyId', EmployeeFamilyController.getEmployeeFamily);

//Create Education
router.post('/', EmployeeFamilyController.createNewEmployeeFamily);

//Update Education
router.patch('/:employeeFamilyId', EmployeeFamilyController.updateEmployeeFamily);

//Delete Education
router.delete('/:employeeFamilyId', EmployeeFamilyController.deleteEmployeeFamily);

module.exports = router;