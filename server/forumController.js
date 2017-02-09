var db = require('./db/db');

module.exports = {
  getTopics: (req, res, next) => {

    const queryStr = 'select * from topic';
    db.query(queryStr, (err, data) => {
      res.json(data);
    })
  },

  postNewTopic: (req, res, next) => {
    const { topicName } = req.body;
    const queryStr = `insert into topic (topic) values ('${topicName}')`;
    db.query(queryStr, (err, data) => {
      res.json(data);
    });
  }
}
