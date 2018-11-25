var Article = require('../models/Article');
module.exports = {
  find: function(req, res) {
    Article.find()
      .then(function(doc) {
        res.json(doc);
      })
      .catch(function(err) {
        res.json(err);
      });
  },
  insert: function(req, res) {
    console.log('req.body: ', req.body);
    Article.create(req.body)
      .then(function(doc) {
        res.json(doc);
        console.log('added doc: ', doc);
      })
      .catch(function(err) {
        res.json(err);
      });
  },
  delete: function(req, res) {
    Article.remove({
      _id: req.params.id
    })
      .then(function(doc) {
        res.json(doc);
        console.log('deleted doc: ', doc);
      })
      .catch(function(err) {
        res.json(err);
      });
  }
};
