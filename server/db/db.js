var mysql = require('mysql');

var db_config = {
  connectionLimit: 10,
  host: 'us-cdbr-iron-east-04.cleardb.net', //us-cdbr-iron-east-04.cleardb.net
  user: 'root',
  password: '',
  database: 'filmedin'
}

var pool = mysql.createPool(db_config);
var db = mysql.createConnection({
  host: 'us-cdbr-iron-east-04.cleardb.net',
  user: 'b179fb4f1cb0bf',
  password: '8b2d4d51',
  database: 'heroku_52b4a7557cf5bb8'
});
db.connect();
module.exports = pool;
