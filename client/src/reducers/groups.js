const initialState = [
    {
      name: 'books',
      id: 0
    },
    {
      name: 'movies',
      id: 1
    },
    {
      name: 'web-sites',
      id: 2
    }
  ]
export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_GROUP':
      return [
          ...state,
          { name: action.name, id: action.id }
        ];
    case 'REMOVE_GROUP':
      return state.filter(group => action.id !== group.id);
    default:
      return state;
  }
}
