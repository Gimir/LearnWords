import style from './css/hidenComponents.module.css';
import React from 'react';
import { connect } from 'react-redux';
import WordCreator from './wordCreator/wordCreator';
import getState from '../../../reducers/getState';

const mapStateToProps = (state) => {
  return {
    state: getState(state)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => {
      dispatch(action);
    }
  }
}

const hiden = ({
  state,
  dispatch
}) => {
  return (
    <div className={style.div}>
      <WordCreator dispatch={dispatch} state={state}/>
    </div>
  )
}

const HidenComponents = connect(
  mapStateToProps,
  mapDispatchToProps
)(hiden);

export default HidenComponents;
