/**
 * New node file
 */
var chai = require('chai');
var sinon = require('sinon');
var expect = chai.expect;
var fs = require('fs');

var appConfig = require('../../../config/app-config');
var ccRqHelper = require('../../../controllers/msg/ss-rq-helper');
var headers = {
	"api-version" : appConfig.api_version,
	"content-type" : "application/json"
};

describe(
		'cc-rq-helper',
		function() {
			it(
					'validateRequest() should not return error if the request is empty',
					function() {
						var req = {};
						req.body = '';
						req.headers = headers;
						var validationResult = ccRqHelper.validateRequest(req);
						expect(validationResult.errors.length).to.equal(1);
					});
			it('validateRequest() should return null if the request is valid',
					function() {
						var req = {};
						req.headers = headers;
						req.body = JSON.parse(fs.readFileSync(
								'./tests/controllers/msg/data/rq_valid.json',
								'utf8'));
						expect(ccRqHelper.validateRequest(req)).to.equal(null);
					});
			it(
					'validateRequest() should return error if the api-version header is missing',
					function() {
						var req = {};
						req.body = JSON.parse(fs.readFileSync(
								'./tests/controllers/msg/data/rq_valid.json',
								'utf8'));
						req.headers = {};
						var validationResult = ccRqHelper.validateRequest(req);
						expect(validationResult.errors.length).to.equal(1);
					});
			it(
					'validateRequest() should return error if the service number or account number is missing',
					function() {
						var req = {};
						req.headers = headers;
						req.body = JSON.parse(fs.readFileSync(
								'./tests/controllers/msg/data/rq_no_code.json',
								'utf8'));
						var validationResult = ccRqHelper.validateRequest(req);
						expect(validationResult.errors.length).to.equal(1);
					});
			it(
					'validateRequest() should return error if service number or account number is empty',
					function() {
						var req = {};
						req.headers = headers;
						req.body = JSON
								.parse(fs
										.readFileSync(
												'./tests/controllers/msg/data/rq_empty_code.json',
												'utf8'));
						var validationResult = ccRqHelper.validateRequest(req);
						expect(validationResult.errors.length).to.equal(1);
					});
		});
