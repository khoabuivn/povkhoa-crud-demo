var db = require('../db');
var shortid = require('shortid');

module.exports.get = function(req, res) {
  res.render('transfers/index', {
    csrfToken: req.csrfToken()
  });
}

module.exports.postCreate = function(req, res) {
  var data = {
    id: shortid.generate(),
    accountId: req.body.accountId,
    amount: parseInt(req.body.amount),
    // userId: res.locals.user.id,
    userId: req.signedCookies.userId
  };

  db.get('transfers').push(data).write();
  res.redirect('/transfers')
}