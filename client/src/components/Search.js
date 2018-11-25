import React from 'react';
const Search = props => (
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <h3>
          <strong>Search</strong>
        </h3>
        <div>
          <form>
            <div className="form-group">
              <label htmlFor="topic">Topic</label>
              <input
                id="topic"
                onChange={props.handleArticlesChange}
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="start">Start Date</label>
              <input
                id="start"
                onChange={props.handlestartChange}
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="end">End Date</label>
              <input
                id="end"
                onChange={props.handleendChange}
                type="text"
                className="form-control"
              />
            </div>
            <button
              onClick={props.handleFormSubmit}
              type="submit"
              className="btn btn-dark"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
    <br />
    <div className="row">
      <div className="col-lg-12">
        <h3>
          <strong>Articles</strong>
        </h3>
        <div>{props.showArticles()}</div>
      </div>
    </div>
    <br />
  </div>
);
export default Search;
