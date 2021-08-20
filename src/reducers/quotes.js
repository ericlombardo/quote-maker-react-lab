export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE' :
      const newQuote = { // format quote with unique id
        id: action.quote.id,
        content: action.quote.content,
        author: action.quote.author,
        votes: 0
      }
      return [ // return initial array with new quote added
        ...state,
        newQuote
      ]

    case 'REMOVE_QUOTE' :
      const quotes = state.filter(quote => quote.id !== action.quoteId)
      return [...quotes]
      
    case 'UPVOTE_QUOTE' :
      const upQuote = state.find(quote => quote.id === action.quoteId)
      upQuote.votes++
      return [
        ...state
      ]
    default :
      return state;
    }
}
