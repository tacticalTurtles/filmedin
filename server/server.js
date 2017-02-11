var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var Promise = require('bluebird');
var db = require('./db/helpers');
var app = express();
var auth = require('./auth');
var routeHelpers = require('./routeHelpers');
var cors = require('cors');
var userController = require('./userController');
var forumController = require('./forumController');
var messageController = require('./messageController');
var s3fs = require('s3fs');
var multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty();
var path = require('path');

// var s3fsImplementation = new s3fs('Filmedin', {
//   region: 'us-west-2',
//   accessKeyId: 'AKIAJQLYVQD66SWEJHEQ',
//   secretAcessKey: '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' 
// });

// s3fsImplementation.create().then(() => console.log('hi')).catch((err) => console.error(err));

app.use(multipartyMiddleware);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.options('*', cors());
app.post('/signin', auth.signin);
app.post('/signup', auth.signup);
app.post('/friend', routeHelpers.addFriend);
app.post('/rating', routeHelpers.addRating);
// app.post('/testUpload', (req, res, next) => {
//   console.log(req.files);
//   const file = req.files.file;
//   var stream = fs.createReadStream(file.path);
//   return s3fsImplementation.writeFile(file.originalFilename, stream).then( ()=> {
//     fs.unlink(file.path, (err) => {
//       if (err) {
//         console.error(err);
//       }
//     })
//   }).catch((err) => console.error(err));
//   res.send();
// })
const indexPath = path.join(__dirname, '/../client/index.html')
const publicPath = express.static(path.resolve(__dirname, '../client'))
app.get('/', (_, res) =>  res.sendFile(indexPath) );

app.get('/home', routeHelpers.home);
    //send overall /recs

app.get('/profile/:id', routeHelpers.profile);
app.post('/profile', routeHelpers.updateProfile);
    //also send /friendratings

app.get('/film/:id', routeHelpers.film);
app.get('/feed', routeHelpers.feed);
app.get('/searchprofile/:id', routeHelpers.searchUser);
app.get('/searchfilm/:id', routeHelpers.searchFilm);

app.get('/users', userController.getUserIdByName);
app.get('/topics', forumController.getTopics);
app.get('/getMessagesByTopicID', messageController.getMessagesByTopicID);
app.post('/postTopic', forumController.postNewTopic);
app.post('/postMessage', messageController.postNewMessage);
app.post('/setFavoriteGenre', routeHelpers.updatePreferredGenre);
app.post('/setLeastFavoriteGenre', routeHelpers.updateLeastPreferredGenre);
app.get('/getMessagesByTitle', messageController.getMessagesByTitle);


module.exports = app;
