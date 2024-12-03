const express = require('express');

const EducationController = require('../controller/education');
const router = express.Router();

// Read Education Data
router.get('/', EducationController.getAllEducation);

// Read Education Data by id
router.get('/:employeeEducationId', EducationController.getEducation);

//Create Education
router.post('/', EducationController.createNewEducation);

//Update Education
router.patch('/:employeeEducationId', EducationController.updateEducation);

//Delete Education
router.delete('/:employeeEducationId', EducationController.deleteEducation);
module.exports = router;