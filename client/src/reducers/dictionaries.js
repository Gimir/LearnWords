const initialState = [
  {
    name: 'Dict 1',
    id: 0,
    groupId: 0,
    words: 10,
    repeat: '12:00:00',
    list: [
      { word: 'Word', translate: 'Слово', id: 0 },
      { word: 'Car', translate: 'Машина', id: 1 },
      { word: 'Window', translate: 'Окно', id: 2 },
      { word: 'Word', translate: 'Слово', id: 3 },
      { word: 'Car', translate: 'Машина', id: 4 },
      { word: 'Window', translate: 'Окно', id: 5 },
      { word: 'Word', translate: 'Слово', id: 6 },
      { word: 'Car', translate: 'Машина', id: 7 },
      { word: 'Window', translate: 'Окно', id: 8 },
      { word: 'Word', translate: 'Слово', id: 9}
    ]
  },
  {
    name: 'Dict 2',
    id: 1,
    groupId: 0,
    words: 6,
    repeat: null,
    list: [
      { word: 'Word', translate: 'Слово', id: 0 },
      { word: 'Car', translate: 'Машина', id: 1 },
      { word: 'Window', translate: 'Окно', id: 2 },
      { word: 'Word', translate: 'Слово', id: 3 },
      { word: 'Car', translate: 'Машина', id: 4 },
      { word: 'Window', translate: 'Окно', id: 5 }
    ]
  }
]

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_DICTIONARY':
      return [
        ...state,
        {
          name: action.name,
          id: action.id,
          groupId: action.groupId,
          words: action.words,
          repeat: action.repeat,
          list: action.list
        }
      ];
    case 'REMOVE_DICTIONARY':
      return state.filter(dict => dict.id !== action.id && dict.groupId !== action.groupId);
    case 'CHANGE_DICTIONARY':
      return [
        ...state.filter(dict => dict.id !== action.id),
        {
          name: action.name,
          id: action.id,
          groupId: action.groupId,
          words: action.words,
          repeat: action.repeat,
          list: action.list
        }
      ]
    default:
      return state;
  }
}
