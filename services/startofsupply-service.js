var log4js = require('log4js');
var logger = log4js.getLogger();
var query = require('array-query');
var ssDB = require('../db/startofsupply-db');


var getEmployees = function(callback) {
	ssDB.getEmployees(function(err, data) {
    if (err != null) {
      logger.error("Error retrieving ", err);
      return callback(500);
    } 
    else{
    	logger.info("data "+data)
    	callback(200,data)
    }    
  });
}



module.exports = {
		getEmployees : getEmployees
};