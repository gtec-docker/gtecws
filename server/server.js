
var loopback = require('loopback');
var log4js = require('log4js');
var logger = log4js.getLogger();
var bodyParser = require('body-parser');
var appConfig = require('../config/app-config');
var app = module.exports = loopback();
var http = require('http');
var ssToolRouter = require('../routes/ss-router');
app.use(bodyParser.json());
app.use("/api",ssToolRouter);
app.listen(appConfig.http.port);
logger.info("Server running at port",appConfig.http.port);