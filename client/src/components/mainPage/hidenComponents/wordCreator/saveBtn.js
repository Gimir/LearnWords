import style from './css/saveBtn.module.css';
import React from 'react';
import { changeDictionary, closeWordCreator } from '../../../../actions/actions';

const SaveBtn = ({
  onSaveClick,
  children
}) => {
  return (
    <div className={style.saveBtn} onClick={()=>{
      onSaveClick();
    }}>
      <h2 className={style.saveBtn_h2}> {children} </h2>
    </div>
  );
};

export default SaveBtn;
