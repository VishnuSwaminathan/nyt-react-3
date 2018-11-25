import React from 'react';

const Saved = props => (
  <li className="list-group-item">
    <h4>
      <strong>{props.title}</strong>
      <a href={props.url} target="_blank">
        <button className="btn btn-dark">View Article</button>
      </a>
      <button
        className="btn btn-secondary"
        onClick={() => props.handleDeleteButton(props._id)}
      >
        Delete
      </button>
    </h4>
    <p>Date: {props.date}</p>
  </li>
);
export default Saved;
