var md5 = require('md5');

var db = require('../db');

module.exports.login = function(req, res) {
  res.render('auth/login');
}

module.exports.postLogin = function(req, res) {
  var email= req.body.email;
  var password = req.body.password;

  var user = db.get('users').find({ email: email }).value();

  if(!user) {
    res.render('auth/login', {
      errors: [
        "User not found"
      ],
      value: req.body
    })
    return;
  }

  var hashedPassword = md5(password);
  if(hashedPassword !== user.password) {
    res.render('auth/login', {
      errors: [
        "Password not found"
      ],
      value: req.body
    })
    return;
  }

  res.cookie('userId', user.id, {
    signed: true
  });
  res.redirect('/users');

}