var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
require('dotenv').config();
var PORT = process.env.PORT || 3001;
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV == 'production') {
  app.use(express.static('client/build'));
} else {
  app.use(express.static(__dirname + '/client/public'));
}

var articlesController = require('./server/controllers/article-controller');
var router = new express.Router();
router.get('/api/saved', articlesController.find);
router.post('/api/saved', articlesController.insert);
router.delete('/api/saved/:id', articlesController.delete);
router.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});
app.use(router);

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/nyt-react',
  { useMongoClient: true },
  function(error) {
    if (error) {
      console.error(error);
    } else {
      console.log('mongoose successfully connected');
    }
  }
);

app.listen(PORT, function() {
  console.log('Server on Port: ' + PORT);
});
