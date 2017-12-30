var NodeCache = require("node-cache");
var appConfig = require('../config/app-config');
var log4js = require('log4js');
var logger = log4js.getLogger();
var mysql      = require('mysql');



var getEmployees = function(callback) {
var connection = mysql.createConnection({
  host     : appConfig.host,
  user     : appConfig.user,
  password : appConfig.password,
  database : appConfig.database
});

connection.connect();

connection.query('SELECT * from Employee', function(err, rows, fields) {
  if (!err){
    console.log('The solution is: ', rows);
	callback(null,rows);}
  else{
    console.log('Error while performing Query.');
	callback(err,null);}
});

connection.end();
	
		}

module.exports = {
	getEmployees :getEmployees
}
