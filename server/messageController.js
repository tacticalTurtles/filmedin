var db = require('./db/db');

module.exports = {
  postNewMessage: (req, res, next) => {
    // const { topicID, topicMessage, userID } = req.body;
    const queryStr = `insert into message (userID, topicID, message) values ('${req.body.userID}','${req.body.topicID}','${req.body.topicMessage}')`;
    db.query(queryStr, (err, data) => {
      console.log(data);
      res.json(data);
    });
  },
  getMessagesByTopicID: (req, res, next) => {
    const topicID = req.query.topicID;
    const queryStr = `select distinct user.username, message.message, message.createdAt, message.topicID from topic inner join message on message.topicID = '${topicID}' inner join user where message.userID = user.id`;
    db.query(queryStr, (err, data) => {
      console.error(err);
      res.json(data);
    });
  },
  getMessagesByTitle: (req, res, next) => {
    var title = req.query.title;
    console.log(title);
    title = title.replace(/\+/gi, ' ');
    console.log('title ', title);
    const queryStr = `select distinct user.username, message.message, message.createdAt, message.topicID from topic inner join message on message.topicID = (select id from topic where topic.topic = '${title}') inner join user where message.userID = user.id`;
    db.query(queryStr, (err, data) => {
      console.error(err);
      res.json(data);
    });
  }
}
