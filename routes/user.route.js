var express = require('express');
var router = express.Router();
var db = require('../db.js');
var controllers = require('../controllers/user.controller');

router.get('/', controllers.get);

router.get('/search', controllers.search);

router.get('/create', controllers.create);

router.get('/:id', controllers.getUser);

router.post('/create', controllers.postCreate);


module.exports = router;