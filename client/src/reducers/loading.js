export default (state = {loading: false}, action) => {
  switch (action.type) {
    case 'LOADING_STARTED':
      return {
        loading: true,
        error: null
      };
    case 'LOADING_SUCCESS':
      return {
        loading: false,
        error: null
      }
    case 'LOADING_FAILED':
      return {
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}
