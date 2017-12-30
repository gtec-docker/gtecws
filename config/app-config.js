var log4js = require('log4js');
var logger = log4js.getLogger();

module.exports = (function (env) {
  var config = {};
  switch (env) {
    case 'production':
      config = require('../env/production');
      break;
    case 'development':
      config = require('../env/development');
      break;
    case 'testing':
      config = require('../env/testing');
      break;
    case 'staging':
      config = require('../env/staging');
      break;
    default:
      logger.warn('NODE_ENV environment variable not set. Valid options: development, testing, staging, production');
      logger.warn("Starting in development mode");
      config = require('../env/development');
  }
  return config;
})(process.env.NODE_ENV);