var db = require('./db/db');

module.exports = {
  getTopics: (req, res, next) => {
    const queryStr = 'select * from topic';
    db.query(queryStr, (err, data) => {
      res.json(data);
    })
  },

  postNewTopic: (req, res, next) => {
    const topicName = req.body.topicName;
    const username = req.body.username;
    const queryStr = `insert into topic (topic, username) values ('${topicName}', '${username}')`;
    db.query(queryStr, (err, data) => {
      res.json(data);
    });
  },

  getTopicByTopicID: (req, res, next) => {
    const queryStr = `select topic from topic where id = '${req.query.topicID}'`
    db.query(queryStr, (err, data) => {
      res.json(data);
    });
  }
}
