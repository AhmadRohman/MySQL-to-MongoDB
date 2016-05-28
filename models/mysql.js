/**
 * Created by rohman on 5/28/16.
 */
var sql = require('mysql');
var mysql = sql.createConnection({
   host : "127.0.0.1",
    port: 3306,
    database : "Employees",
    user : "root",
    password : "root"
});
console.log('MySql connect .. !!');

module.exports = mysql;