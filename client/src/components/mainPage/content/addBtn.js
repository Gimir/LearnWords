import style from './css/addBtn.module.css';
import React from 'react';
import { connect } from 'react-redux';
import { toggleWordCreator } from '../../../actions/actions';

let AddBtn = ({
  dispatch
}) => {
  return (
    <div className={style.button} onClick={() => {
      dispatch(toggleWordCreator());
    }}>
      <h1 className={style.button_h1}> Add new </h1>
    </div>
  )
}

AddBtn = connect()(AddBtn);

export default AddBtn;
