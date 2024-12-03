const db = require('../config/db');

const getAllEmployee = () => {
    const query = 'SELECT * FROM employee';
    
    return db.execute(query);
}

const getEmployee = (employeeId) => {
    const query = 'SELECT * FROM employee WHERE `PK id` = ' + employeeId;
    return db.execute(query);
}

const createNewEmployee = (body) => {
    const query = ` INSERT INTO employee(nik, name, is_active, start_date, end_date) 
                    VALUES('${body.nik}', '${body.name}', ${body.is_active}, '${body.start_date}', '${body.end_date}')`;
    
    return db.execute(query);
}

const updateEmployee = (employeeId, body) => {
    const query = ` UPDATE Employee
                    SET nik = '${body.nik}', name = '${body.name}', is_active = ${body.is_active}, start_date = '${body.start_date}', end_date = '${body.end_date}'`
                    + 'WHERE `PK id` = ' + employeeId;
    
    return db.execute(query);
}

const deleteEmployee = (employeeId) => {
    const query = 'DELETE FROM employee WHERE `PK id` = ' + employeeId;
    return db.execute(query);
}

module.exports = {
    getAllEmployee,
    getEmployee,
    createNewEmployee,
    updateEmployee,
    deleteEmployee
}
