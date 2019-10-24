export default (state = null, action) => {
  switch (action.type) {
    case 'SET_NEW_REMOVED_GROUP':
      return action.id;
    default:
      return state;
  }
}
