import uuid from 'uuid';

export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE' :
      const newQuote = { // format quote with unique id
        id: uuid(),
        content: action.quote.content,
        author: action.quote.author,
        votes: 0
      }
      return [ // return initial array with new quote added
        ...state,
        newQuote
      ]
    default :
      return state;
    }
}
