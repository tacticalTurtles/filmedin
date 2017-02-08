var db = require('./db/db');

module.exports = {
  getTopics: (req, res, next) => {

    const queryStr = 'select * from topic';
    db.query(queryStr, (err, data) => {
      console.log('getTopics server data ==== ', data);
      res.json(data);
    })
  }
}