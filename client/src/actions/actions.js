import axios from 'axios';
const ENDPOINT = 'http://localhost:5000/';

const loadingSuccess = () => {
  return {
    type: 'LOADING_SUCCESS'
  }
}
const loadingStarted = () => {
  return {
    type: 'LOADING_STARTED'
  }
};
const loadingFailed = (error) => {
  return {
    type: 'LOADING_FAILED',
    error
  }
};

export const setRemovedGroup = (id) => {
  return {
    type: 'SET_NEW_REMOVED_GROUP',
    id
  }
};
export const addGroup = (name) => {
  return dispatch => {
    dispatch(loadingStarted);

    axios
      .post(`${ENDPOINT}addGroup/${name}`)
      .then(res => {
        dispatch(loadingSuccess());
        dispatch(addGroupSuccess(res.data));
      })
      .catch(err => {
        console.log(err.message);
        dispatch(loadingFailed(err.message));
      })
  }
};
const addGroupSuccess = (res) => {
  return {
    type: 'ADD_GROUP',
    name: res.name,
    id: res._id
  }
};
export const removeGroup = (id) => {
  return dispatch => {
    dispatch(loadingStarted());

    axios
      .delete(`${ENDPOINT}deleteGroup/${id}`)
      .then(res => {
        console.log(res);
        dispatch(loadingSuccess());
        dispatch(removeGroupSuccess(id));
      })
      .catch(err => {
        console.log(err.message);
        dispatch(loadingFailed(err.message));
      })
  }
};
const removeGroupSuccess = (id) => {
  return {
    type: 'REMOVE_GROUP',
    id
  }
};
export const addDictionary = (groupId, name, words, repeat, list = []) => {
  return dispatch => {
    dispatch(loadingStarted());

    axios
      .post(`${ENDPOINT}addDictionary`, {
        name,
        words: list,
        groupId
      })
      .then(res => {
        dispatch(loadingSuccess());
        dispatch(addDictionarySuccess(res.data));
      })
      .catch(err => {
        console.log(err.message);
        dispatch(loadingFailed(err.message));
      })
  }
};
const addDictionarySuccess = (res) => {
  return {
    type: 'ADD_DICTIONARY',
    groupId: res.groupId,
    name: res.name,
    words: res.words.length,
    repeat: null,
    list: res.words,
    id: res._id
  }
};
export const removeDictionary = (id, groupId) => {
  return dispatch => {
    dispatch(loadingStarted());

    axios
      .delete(`${ENDPOINT}deleteDictionary/${id}`)
      .then(res => {
        dispatch(loadingSuccess());
        dispatch(removeDictionarySuccess(id, groupId));
      })
      .catch(err => {
        console.log(err.message);
        dispatch(loadingFailed(err.message));
      })
  }
};
const removeDictionarySuccess = (id, groupId) => {
  return {
    type: 'REMOVE_DICTIONARY',
    id,
    groupId
  }
};
export const changeDictionary = (id, groupId, name, words, repeat, list) => {
  return dispatch => {
    dispatch(loadingStarted());

    axios
      .put(`${ENDPOINT}changeDictionary`, {
        id: id,
        name: name,
        words: list
      })
      .then(res => {
        dispatch(loadingSuccess());
        dispatch(changeDictionarySuccess(id, groupId, name, words, repeat, list));
      })
      .catch(err => {
        console.log(err.message);
        dispatch(loadingFailed(err.message));
      })
  }
};
const changeDictionarySuccess = (id, groupId, name, words, repeat, list) => {
  return {
    type: 'CHANGE_DICTIONARY',
    name,
    words,
    id,
    groupId,
    repeat,
    list
  }
};
export const showGroupInput = () => {
  return {
    type: 'SHOW_GROUP_INPUT'
  }
};
export const changeSelectedGroup = (id) => {
  return {
    type: 'CHANGE_SELECTED_GROUP',
    id
  }
};
export const toggleWordCreator = (id=null, action = 'CREATE', name = '', repeat = null, list = []) => {
  return {
    type: 'TOGGLE_WORD_CREATOR',
    id,
    action,
    name,
    repeat,
    list
  }
};
export const addWord = (word, translate) => {
  return {
    type: 'ADD_WORD',
    word,
    translate
  }
};
export const removeWord = (id) => {
  return {
    type: 'REMOVE_WORD',
    id
  }
};
export const closeWordCreator = () => {
  return {
    type: 'CLOSE_WORD_CREATOR'
  }
};
