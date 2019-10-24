const getState = (state) => {
  return state;
};

export const getDictionaries = (state, selectedGroup) => {
  return state.filter(dict => dict.groupId === selectedGroup);
};

export const getDictCount = (state, selectedGroup) => {
  return state.filter(dict => dict.groupId === selectedGroup).length;
};

export default getState;
