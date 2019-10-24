import React from 'react';
import { connect } from 'react-redux';
import { getDictCount } from '../../../reducers/getState';

const mapStateToProps = (state) => {
  return {
    dicts: getDictCount(state.dictionaries, state.selectedGroup)
  };
};

const counter = ({ dicts }) => {
  return (
    <h1> {dicts} dictionaries: </h1>
  );
};

const Count = connect(
  mapStateToProps
)(counter);

export default Count;
