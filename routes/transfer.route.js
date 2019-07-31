var express = require('express');
var router = express.Router();

var controllers = require('../controllers/transfer.controller');

router.get('/', controllers.get);
router.post('/create', controllers.postCreate);

module.exports = router;