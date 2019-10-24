export default (state = 0, action) => {
  switch (action.type) {
    case 'CHANGE_SELECTED_GROUP':
      return action.id;
    default:
      return state;
  }
}
