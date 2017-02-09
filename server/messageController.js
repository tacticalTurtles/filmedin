var db = require('./db/db');

module.exports = {
  postNewMessage: (req, res, next) => {
    const { topicID, topicMessage, userID } = req.body;
    const queryStr = `insert into message (userID, topicID, message) values ('${userID}','${topicID}','${topicMessage}')`;
    db.query(queryStr, (err, data) => {
      res.json(data);
    });
  },
  getMessagesByTopicID: (req, res, next) => {
    const { topicID } = req.query;
    const queryStr = `select * from message where topicID = '${topicID}'`;
    db.query(queryStr, (err, data) => {
      res.json(data);
    });
  }
}
