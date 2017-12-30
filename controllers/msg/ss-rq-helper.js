var ssToolErrHelper = require('./ss-error-helper');
var appConfig = require('../../config/app-config');
var moment = require("moment");

var Validator = require('jsonschema').Validator;
var validator = new Validator();

var requestSchema = {
		"id" : "/start_supply",
		"type" : "object",
		"properties":{
			"account_number":{
				"type": "string"
			},
			"service_number":{
				"type":"string"
			}
		},

		"required" : [ "account_number", "service_number" ]
	};
module.exports = {
    /**
     * Validates simulation request.
     * 
     * @param req
     * @returns null if there are no errors otherwise return error message
     */
	validateRequest : function(req) {
		if(req.headers['api-version'] != appConfig.api_version){
		  var errors = [];
		  errors[0] = {};
		  errors[0].stack = '"API-Version" header is mandatory. Current version of the service is: '+appConfig.api_version;
      return ssToolErrHelper.buildValidationErrorResponse(errors);
		}
		if(!req.headers['content-type']){
      var errors = [];
      errors[0] = {};
      errors[0].stack = '"Content-Type" header is mandatory. It should be set to "application/json" ';
      return ssToolErrHelper.buildValidationErrorResponse(errors);
    }
		  var validationResult = validator.validate(req.body, requestSchema);
	    var account_number = req.body.account_number;
	    var service_number = req.body.service_number;

	    if (service_number===""|| account_number=== "") {
        validationResult.addError('Account Number and Service Number  Must Be not empty');
	    }
	  
	  
	 
	  if (validationResult.errors.length > 0) {
console.error("there is "+validationResult.errors.length +"errors");
	    return ssToolErrHelper.buildValidationErrorResponse(validationResult.errors);
	  }
	  return null;
	}
}
