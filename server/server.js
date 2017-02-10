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

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.options('*', cors());
app.post('/signin', auth.signin);
app.post('/signup', auth.signup);
app.post('/friend', routeHelpers.addFriend);
app.post('/rating', routeHelpers.addRating);

app.get('/', routeHelpers.default);

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
