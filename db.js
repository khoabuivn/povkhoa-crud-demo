var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');
var db = low(adapter);
db.defaults({
  users: [],
  sessions: [],
  transfers: []
})
  .write();

module.exports = db;