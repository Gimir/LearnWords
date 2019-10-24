import { changeSelectedGroup, setRemovedGroup, removeGroup } from '../../../../actions/actions';
import { connect } from 'react-redux';
import tabList from './tabList';

const mapStateToProps = (state) => {
  return {
    groups: state.groups,
    current: state.selectedGroup
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTabClick: (id) => {
      dispatch(changeSelectedGroup(id));
    },
    onCloseClick: (id) => {
      dispatch(removeGroup(id));
    }
  };
}

const Tabs = connect(
  mapStateToProps,
  mapDispatchToProps
)(tabList);

export default Tabs;
