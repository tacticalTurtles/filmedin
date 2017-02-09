var db = require('./db/db');

module.exports = {
  getUserIdByName: (req, res, next) => {
    const { username } = req.query;
    const queryStr = `select id from user where username = '${username}'`;
    db.query(queryStr, (err, data) => {
      res.json(data);
    })
  }
}
