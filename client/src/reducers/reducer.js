import { combineReducers } from 'redux';
import groupInput from './addGroupInput';
import groups from './groups';
import dictionaries from './dictionaries';
import selectedGroup from './selectedGroup';
import lastRemovedGroup from './lastRemovedGroup';
import wordCreator from './wordCreator';
import loading from './loading';

const reducer = combineReducers({
  groups,
  dictionaries,
  groupInput,
  selectedGroup,
  lastRemovedGroup,
  wordCreator,
  loading
});
export default reducer;
