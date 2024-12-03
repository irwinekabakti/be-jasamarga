const mysql = require('mysql2')

const dbpool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password123',
    database: 'data_kepegawaian'
});

module.exports = dbpool.promise();