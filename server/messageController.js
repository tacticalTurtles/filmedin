var db = require('./db/db');

const queryStr = `select t.id, m.message from topic t
                    where t.id = 1
                    inner join message m on m.topicID = 1`;
db.query(queryStr, (err, data) => {
  console.log(data);
})

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
  },
  getMessagesByTitle: (req, res, next) => {
    var { title } = req.query;
    title = title.replace(/\+/gi, ' ');
    const queryStr = `select distinct user.username, message.message, message.createdAt, message.updatedAt from topic inner join message on message.topicID = (select id from topic where topic.topic = '${title}') inner join user where message.userID = user.id`;
    db.query(queryStr, (err, data) => {
      res.json(data);
    });
  }
}
