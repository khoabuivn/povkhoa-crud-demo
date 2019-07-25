var express = require('express');
var router = express.Router();
var db = require('../db');
var validate = require('../validate/user.validate');
var controllers = require('../controllers/user.controller');

router.get('/', controllers.get);

router.get('/cookie', function(req, res, next) {
  res.cookie('user-id', 12345);
  res.send('hello');
  // console.log(req.cookies);
})


router.get('/search', controllers.search);

router.get('/create', controllers.create);

router.get('/:id', controllers.getUser);

router.post('/create', validate.postCreate, controllers.postCreate);


module.exports = router;