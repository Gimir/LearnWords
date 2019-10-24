export default (state = false, action) => {
  switch (action.type) {
    case 'SHOW_GROUP_INPUT':
      return !state;
    default:
      return state;
  }
}
