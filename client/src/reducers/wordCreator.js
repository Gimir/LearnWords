const initialState = {
  action: null,
  id: null,
  name: '',
  repeat: null,
  list: []
}
let id = 11;
export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_WORD_CREATOR':
      return {
        action: action.action,
        id: action.id,
        name: action.name,
        repeat: action.repeat,
        list: action.list
      };
    case 'ADD_WORD':

      return {
        action: state.action,
        id: state.id,
        name: state.name,
        repeat: state.repeat,
        list: [
          ...state.list,
          {
            word: action.word,
            translate: action.translate,
            id: id++
          }
        ]
      }
    case 'REMOVE_WORD':
      return {
        action: state.action,
        id: state.id,
        name: state.name,
        repeat: state.repeat,
        list: state.list.filter(word => word.id !== action.id)
      }
    case 'CLOSE_WORD_CREATOR':
      return {
        action: null,
        id: null,
        name: '',
        repeat: null,
        list: []
      };
    default:
      return state;
  }
}
