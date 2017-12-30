var startofsupplyController = require('../controllers/ss-controller');
var loopback = require('loopback');
module.exports = function() {
  var router = loopback.Router();
  router.get('/employees', startofsupplyController.getEmployees);
  return router;
}();