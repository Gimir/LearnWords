import style from './addGroupBtn.module.css';
import React from 'react';


const AddGroupBtn = ({
  on,
  onShowClick
}) => {
  return (
    <button onClick={() => {
      onShowClick();
    }} className={style.button}> {on ? '-' : '+'} </button>
  );
}
export default AddGroupBtn;
