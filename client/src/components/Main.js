import React, { Component } from 'react';
import API from '../utils/api';
import Search from './Search';
import Articles from './Articles';
import Saved from './Saved';

export default class Main extends Component {
  state = {
    topic: '',
    start: '',
    end: '',
    saved: [],
    articles: []
  };

  componentDidMount() {
    this.getSavedArticles();
  }

  getSavedArticles = () => {
    API.getArticle().then(res => {
      this.setState({ saved: res.data });
    });
  };

  showSaved = () => {
    return this.state.saved.map(save => (
      <Saved
        _id={save._id}
        key={save._id}
        title={save.title}
        date={save.date}
        url={save.url}
        handleDeleteButton={this.handleDeleteButton}
        getSavedArticles={this.getSavedArticles}
      />
    ));
  };

  showArticles = () => {
    return this.state.articles.map(article => (
      <Articles
        _id={article._id}
        key={article._id}
        title={article.headline.main}
        url={article.web_url}
        date={article.pub_date}
        handleSaveButton={this.handleSaveButton}
        getSavedArticles={this.getSavedArticles}
      />
    ));
  };

  handleArticlesChange = event => {
    this.setState({ topic: event.target.value });
  };

  handlestartChange = event => {
    this.setState({ start: event.target.value });
  };

  handleendChange = event => {
    this.setState({ end: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log('Getting NYT Articles');
    console.log('this.state.topic: ', this.state.topic);
    console.log('this.state.start: ', this.state.start);
    console.log('this.state.end: ', this.state.end);
    API.search(this.state.topic, this.state.start, this.state.end).then(res => {
      this.setState({ articles: res.data.response.docs });
      console.log('this.state.articles: ', this.state.articles);
    });
  };

  handleSaveButton = id => {
    const findArticleByID = this.state.articles.find(
      something => something._id === id
    );
    console.log('findArticleByID: ', findArticleByID);
    const newSave = {
      title: findArticleByID.headline.main,
      date: findArticleByID.pub_date,
      url: findArticleByID.web_url
    };
    API.saveArticle(newSave).then(this.getSavedArticles());
  };

  handleDeleteButton = id => {
    API.deleteArticle(id).then(this.getSavedArticles());
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">
          <strong>NYTREACT</strong>
        </h1>
        <div className="container">
          <h3>
            <strong>Saved Articles</strong>
          </h3>
          <ul className="list-group">{this.showSaved()}</ul>
        </div>
        <br />
        <Search
          showArticles={this.showArticles}
          handlestartChange={this.handlestartChange}
          handleendChange={this.handleendChange}
          handleArticlesChange={this.handleArticlesChange}
          handleFormSubmit={this.handleFormSubmit}
        />
      </div>
    );
  }
}
