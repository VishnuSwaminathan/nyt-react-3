import React from 'react';

const Articles = props => (
  <div className="container">
    <li className="list-group-item">
      <h4>
        <strong>{props.title}</strong>{' '}
        <div className="btn-group">
          <a href={props.url} target="_blank">
            <button className="btn btn-dark ">View Article</button>
          </a>
          <button
            className="btn btn-secondary"
            onClick={() => props.handleSaveButton(props._id)}
          >
            Save
          </button>
        </div>
      </h4>
      <p>Date: {props.date}</p>
    </li>
  </div>
);
export default Articles;
