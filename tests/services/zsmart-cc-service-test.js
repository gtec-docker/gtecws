var chai = require('chai');
var sinon = require('sinon');
var expect = chai.expect;
var fs = require('fs');
var zsmartCCService = require('../../services/startofsupply-service');

var zsmartCCDB = sinon.mock(require('../../db/startofsupply-db'));
var data = JSON.parse(fs.readFileSync('./tests/services/data/startofsupply-res.json', 'utf8'));

describe('zsmart-cc-service-test', function() {
	testgetStartOfSupplyData("671671061","352689066");
	function testgetStartOfSupplyData(service_number,account_number){
		mockData();
	  it('getStartofSupplyData() for ' + service_number+" "+account_number, function() {
		  zsmartCCService.getStartofSupplyData(service_number,account_number,function(status) {
			  expect(status).to.equal(200);		  	
		  })
	  });
}
	function mockData(){
		zsmartCCDB.expects('getStartofSupplyData').withArgs("671671061","352689066").yields(null, data);
	}
	
	
});