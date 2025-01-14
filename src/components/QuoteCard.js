// use callbacks for functionality
// use destructuring for { content, author, votes } = props.quote

import React from 'react';

const QuoteCard = (props) =>
  <div key={props.quote.id}>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          <p>{props.quote.content}</p>
          <footer>- author <cite title="Source Title">{props.quote.author}</cite></footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              props.upvoteQuote(props.quote.id)
            }}
          >
            Upvote
          </button>
          <button
            type="button"
            className="btn btn-secondary"
          >
            Downvote
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => props.removeQuote(props.quote.id)}
            // remove from store
            // use callback from quotes this.props.callback(id)
            // in quotes container go to store with action of remove and pass id
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div>Votes: {props.quote.votes}</div>
      </div>
    </div>
  </div>;

export default QuoteCard;
