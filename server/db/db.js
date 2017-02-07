var mysql = require('mysql');

var db_config = {
  connectionLimit: 10,
  host: 'localhost', //us-cdbr-iron-east-04.cleardb.net
  user: 'root',
  password: '',
  database: 'filmedin'
}

var pool = mysql.createPool(db_config);
// var db = mysql.createConnection({
//   host: 'us-cdbr-iron-east-04.cleardb.net',
//   user: 'b03d6fc9041b73',
//   password: '322391ba',
//   database: 'heroku_a64cb1e31ae9e38'
// });
// db.connect();
module.exports = pool;
