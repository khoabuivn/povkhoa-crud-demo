var express = require('express');
var router = express.Router();

var controllers = require('../controllers/product.controller');

router.get('/', controllers.get);

module.exports = router;