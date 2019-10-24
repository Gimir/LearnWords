import { connect } from 'react-redux';
import AddGroupBtn from './addGroupBtn';
import { showGroupInput } from '../../../../actions/actions';

const mapStateToProps = (state) => {
  return {
    on: state.groupInput
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onShowClick: () => {
      dispatch(showGroupInput());
    }
  }
}

const ShowInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddGroupBtn);

export default ShowInput;
