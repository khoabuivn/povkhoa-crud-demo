var shortid = require('shortid');
var db = require('../db');

module.exports.get = function(req, res)  {
  res.render('users/index', {
    users: db.get('users').value()
  });
}

module.exports.search = function(req, res) {
  var q = req.query.q;
  var users = db.get('users').value();
  var matchedUsers = users.filter(function(user) {
    return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
  res.render('users/index', {
    users: matchedUsers,
    value: q
  })
};

module.exports.create = function(req, res) {
  res.render('users/create');
};

module.exports.getUser = function(req, res) {
  var id = req.params.id;
  var user = db.get('users').find({ id: id }).value();
  res.render('users/view', { user: user })
};

module.exports.postCreate = function(req, res) {
  /*console.log(req.body);*/
  req.body.id = shortid.generate();
  req.body.avatar = req.file.path.slice(7);
  db.get('users').push(req.body).write();
  // console.log(res.locals);
  res.redirect('/users');
};