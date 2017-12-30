var ssMsgHelper = require('./msg/ss-rq-helper');
var ssErrHelper = require('./msg/ss-error-helper');
var log4js = require('log4js');
var logger = log4js.getLogger();

var startofsupplyService = require('../services/startofsupply-service');

module.exports = {
		getEmployees : function(req, res) {
  
  
        startofsupplyService.getEmployees(function(status, result) {

      if(status == 404){
        return res.status(status).json(ssErrHelper.buildParentCodeNotFoundErrorResponse()).send();
      }else if (status == 200){
		logger.debug("Response", result);
		return res.status(status).json(result).send();
      }else{
		  return res.status(500).json(ssErrHelper.buildServerErrorResponse()).send();
	  }
    });
  }
};
