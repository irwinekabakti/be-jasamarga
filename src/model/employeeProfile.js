const db = require('../config/db');

const getAllEmployeeProfile = () => {
    const query = 'SELECT * FROM employee_profile';
    
    return db.execute(query);
}

const getEmployeeProfile = (employeeProfileId) => {
    const query = 'SELECT * FROM employee_profile WHERE `PK id` = ' + employeeProfileId;
    return db.execute(query);
}

const createNewEmployeeProfile = (body) => {
    const query = 
    ` INSERT INTO employee_profile(employee_id, place_of_birth ,date_of_birth, gender, is_married) 
      VALUES('${body.employee_id}', '${body.place_of_birth}', '${body.date_of_birth}', '${body.gender}', '${body.is_married}')`;
    
    return db.execute(query);
}

const updateEmployeeProfile = (employeeProfileId, body) => {
    const query = 
    ` UPDATE employee_profile
      SET employee_id = '${body.employee_id}', place_of_birth = '${body.place_of_birth}', date_of_birth = '${body.date_of_birth}', 
      gender = '${body.gender}', is_married = '${body.is_married}'`
    + 'WHERE `PK id` = ' + employeeProfileId;
    
    return db.execute(query);
}

const deleteEmployeeProfile = (employeeProfileId) => {
    const query = 'DELETE FROM employee_profile WHERE `PK id` = ' + employeeProfileId;
    return db.execute(query);
}

module.exports = {
    getAllEmployeeProfile,
    getEmployeeProfile,
    createNewEmployeeProfile,
    updateEmployeeProfile,
    deleteEmployeeProfile
}