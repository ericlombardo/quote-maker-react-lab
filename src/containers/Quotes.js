// render list of quote cards
// hook up to store to do this
// pass callbacks for remove, upvote, and downvote action as props
// mapDispatch to do this

import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map(quote => {
                return (
                  <div key={quote.id}>
                    < QuoteCard 
                      quote={quote}  
                      removeQuote={this.props.removeQuote} 
                      upvoteQuote={this.props.upvoteQuote}/>
                  </div>
                )
              })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { quotes: state.quotes }
}

const mapDispatchToProps = dispatch => {
  return {
    removeQuote: quoteId => dispatch(removeQuote(quoteId)), 
    upvoteQuote: quoteId => dispatch(upvoteQuote(quoteId))
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
