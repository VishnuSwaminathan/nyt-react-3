import axios from 'axios';
const API = {
  search: function(topic, start, end) {
    const authKey = 'b9f91d369ff59547cd47b931d8cbc56b:0:74623931';
    const queryURL =
      'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' +
      authKey +
      '&q=' +
      topic +
      '&begin_date=' +
      start +
      '0101&end_date=' +
      end +
      '1231';
    return axios.get(queryURL);
  },
  getArticle: function() {
    return axios.get('/api/saved');
  },
  saveArticle: function(article) {
    return axios.post('/api/saved', article);
  },
  deleteArticle: function(id) {
    return axios.delete(`/api/saved/${id}`);
  }
};
export default API;
