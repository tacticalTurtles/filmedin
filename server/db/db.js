var mysql = require('mysql');

////////////////////////// HEROKU CONFIG //////////////////////////

var db_config = {
  connectionLimit: 10,
  host: 'us-cdbr-iron-east-04.cleardb.net', //us-cdbr-iron-east-04.cleardb.net
  user: 'b179fb4f1cb0bf',
  password: '8b2d4d51',
  database: 'heroku_52b4a7557cf5bb8'
}

////////////////////////// LOCAL CONFIG //////////////////////////

// var db_config = {
//   connectionLimit: 10,
//   host: 'localhost', //us-cdbr-iron-east-04.cleardb.net
//   user: 'root',
//   password: '',
//   database: 'filmedin'
// };

var pool = mysql.createPool(db_config);

module.exports = pool;
