var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var articleSchema = new Schema({
  title: String,
  url: String,
  date: Date
});
module.exports = Article = mongoose.model('Article', articleSchema);
