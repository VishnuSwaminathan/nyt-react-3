const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT || 3001;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV == 'production') {
  app.use(express.static('client/build'));
} else {
  app.use(express.static(__dirname + '/client/public'));
}

const articlesController = require('./server/controllers/article-controller');
const router = new express.Router();
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
  console.log(`Listening on Port ${PORT}`);
});
