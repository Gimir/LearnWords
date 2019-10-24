import style from './css/addWordBtn.module.css';
import React from 'react';

const AddWordBtn = ({
  onAddWord
}) => {
  return (
    <div className={style.addWordBtn} onClick={() => {
      onAddWord();
    }}>
      <h1 className={style.addWord_h1}> + </h1>
    </div>
  );
};
export default AddWordBtn;
