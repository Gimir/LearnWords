import { connect } from 'react-redux';
import dictList from './dictList';
import { removeDictionary, toggleWordCreator } from '../../../../actions/actions';
import { getDictionaries } from '../../../../reducers/getState';

const mapStateToProps = (state) => {
  return {
    dictionaries: getDictionaries(state.dictionaries, state.selectedGroup),
    groupId: state.selectedGroup
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveDict: (id, gropuId) => {
      dispatch(removeDictionary(id, gropuId));
    },
    onDictChange: (id, change, name, repeat, list) => {
      dispatch(toggleWordCreator(id, change, name, repeat, list));
    }
  };
};

const Dictionaries = connect(
  mapStateToProps,
  mapDispatchToProps
)(dictList);

export default Dictionaries;
