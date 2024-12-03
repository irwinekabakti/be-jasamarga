const db = require('../config/db');

const getAllEmployeeFamily = () => {
    const query = 'SELECT * FROM employee_family';
    
    return db.execute(query);
}

const getEmployeeFamily = (employeeFamilyId) => {
    const query = 'SELECT * FROM employee_family WHERE `PK id` = ' + employeeFamilyId;
    return db.execute(query);
}

const createNewEmployeeFamily = (body) => {
    const query = 
    ` INSERT INTO employee_family(employee_id, name, identifier, job, place_of_birth, 
      date_of_birth, religion, is_life, is_divorced, relation_status) 
      VALUES('${body.employee_id}', '${body.name}', ${body.identifier}, '${body.job}', '${body.place_of_birth}', 
      '${body.date_of_birth}', '${body.religion}', ${body.is_life}, ${body.is_divorced}, '${body.relation_status}')`;
    
    return db.execute(query);
}

const updateEmployeeFamily = (employeeFamilyId, body) => {
    const query = 
    ` UPDATE employee_family
      SET employee_id = '${body.employee_id}', name = '${body.name}', identifier = ${body.identifier}, job = '${body.job}',
      place_of_birth = '${body.place_of_birth}', date_of_birth = '${body.date_of_birth}', religion = '${body.religion}', 
      is_life = ${body.is_life}, is_divorced = ${body.is_divorced}, relation_status = '${body.relation_status}'`
    + 'WHERE `PK id` = ' + employeeFamilyId;
    
    return db.execute(query);
}

const deleteEmployeeFamily = (employeeFamilyId) => {
    const query = 'DELETE FROM employee_family WHERE `PK id` = ' + employeeFamilyId;
    return db.execute(query);
}

module.exports = {
    getAllEmployeeFamily,
    getEmployeeFamily,
    createNewEmployeeFamily,
    updateEmployeeFamily,
    deleteEmployeeFamily
}