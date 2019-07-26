var db = require('../db');

module.exports.get = function(req, res) {
  var products = db.get('products').value();
  res.render('products/index', {
    products: products
  });
}