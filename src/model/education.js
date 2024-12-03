const db = require('../config/db');

const getAllEducation = () => {
    const query = 'SELECT * FROM education';
    
    return db.execute(query);
}

const getEducation = (employeeEducationId) => {
    const query = 'SELECT * FROM education WHERE `PK id` = ' + employeeEducationId;
    return db.execute(query);
}

const createNewEducation = (body) => {
    const query = 
    ` INSERT INTO education(employee_id, name, level, description, created_by, updated_by) 
      VALUES('${body.employee_id}', '${body.name}', '${body.level}', '${body.description}', 'admin', 'admin')`;
    
    return db.execute(query);
}

const updateEducation = (employeeEducationId, body) => {
    const query = 
    ` UPDATE education
      SET employee_id = '${body.employee_id}', name = '${body.name}', level = '${body.level}', description = '${body.description}'`
    + 'WHERE `PK id` = ' + employeeEducationId;
    
    return db.execute(query);
}

const deleteEducation = (employeeEducationId) => {
    const query = 'DELETE FROM education WHERE `PK id` = ' + employeeEducationId;
    return db.execute(query);
}

module.exports = {
    getAllEducation,
    getEducation,
    createNewEducation,
    updateEducation,
    deleteEducation
}
