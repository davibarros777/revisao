const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: '1234',
    port:3306,
    database: 'client_order_system',
    connectionLimit: 10
});

module.exports = pool;