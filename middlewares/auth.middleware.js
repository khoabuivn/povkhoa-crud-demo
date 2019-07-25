var db = require('../db');

module.exports.requireAuth = function(req, res, next) {
  var userId = req.cookies.userId;

  var user = db.get('users').find({ id: userId }).value();

  if(!user) {
    res.render('auth/login');
    return;
  }

  next()
}
