import { connect } from 'react-redux';
import GroupInput from './groupInput';
import { addGroup, showGroupInput } from '../../../../actions/actions';

const mapStateToProps = (state) => {
  return {
    on: state.groupInput
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddGroup: (value) => {
      dispatch(addGroup(value));
      dispatch(showGroupInput());
    }
  };
};

const Input = connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupInput);

export default Input;
