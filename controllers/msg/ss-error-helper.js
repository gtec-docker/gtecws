var log4js = require('log4js');
var logger = log4js.getLogger();

var buildError = function(code, title, desc) {
	var error = {
		code : code,
		title : title,
		description : desc
	};
	return error;
};
var buildParentCodeNotFoundErrorResponse = function(message, errors) {
	var errorResponseMessage = {};
	errorResponseMessage.status = "JOIN-STATE-N-ERROR";
	errorResponseMessage.message = message;
	errorResponseMessage.errors = errors;
	logger.info("Error debug",errorResponseMessage);
	return errorResponseMessage;
};
var buildErrorResponse = function(message, errors) {
	var errorResponseMessage = {};
	errorResponseMessage.status = "JOIN-STATE-G-ERROR";
	errorResponseMessage.message = message;
	errorResponseMessage.errors = errors;
	logger.info("Error debug",errorResponseMessage);
	return errorResponseMessage;
};

var buildValidationErrors = function(validationErrors) {
	var errors = [];
	for (var i = 0; i < validationErrors.length; i++) {
		var err = validationErrors[i].stack;
		if(err.indexOf("instance") == 0){
			err = err.substr(9);
		}
		errors[i] = buildError("JOIN-ERROR-STATE-003", "Bad request",
				err);
	}
	return errors;
};

module.exports = {
    /**
     * Generates request validation error response message
     * 
     * @returns validation error message
     */
	buildValidationErrorResponse : function(validationErrors) {
		return buildErrorResponse("An error occurred while calling the API.",
				buildValidationErrors(validationErrors));
	},

	/**
	 * Generates internal server error response message
	 * 
	 * @returns internal server error message
	 */
	buildServerErrorResponse : function() {
		var errors = [ buildError("JOIN-ERROR-STATE-001",
				"Internal Server Error",
				"An Internal Server Error has occurred while processing the request.") ];
		return buildErrorResponse("An error occurred while calling the API.",
				errors);
	},
	
	/**
	 * Generates time out error response message
	 * 
	 * @returns time out error message
	 */

	buildServerTimeOutResponse : function() {
		var errors = [ buildError("JOIN-ERROR-STATE-002", "Response Timeout",
				"The backend system takes too much time to handle the query.") ];
		return buildErrorResponse("An error occurred while calling the API.",
				errors);
	},

}