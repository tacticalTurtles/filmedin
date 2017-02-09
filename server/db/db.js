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

db.connect( (err) => {
  if(err) {                                      // or restarting (takes a while sometimes).
      console.log(' Error when connecting to db:', err);
      setTimeout(handleDisconnect, 1000);         // We introduce a delay before attempting to reconnect,
  }                                               // to avoid a hot loop, and to allow our node script to

});                                             // process asynchronous requests in the meantime.
                                                  // If you're also serving http, display a 503 error.

db.on('  Database Error', function(err) {
  console.log('db error: ' + err.code, err);
  if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect();                       // lost due to either server restart, or a
  } else {                                      // connnection idle timeout (the wait_timeout
      throw err;                                // server variable configures this)
  }

});
module.exports = pool;
