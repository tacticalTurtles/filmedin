var db = require('./db/db');

module.exports = {
  getUserIdByName: (req, res, next) => {
    const username = req.query.username;
    const queryStr = `select id from user where username = '${username}'`;
    db.query(queryStr, (err, data) => {
      console.log('server data', data);
      res.json(data);
    })
  }
}