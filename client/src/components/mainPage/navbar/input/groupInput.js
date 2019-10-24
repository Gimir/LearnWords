import style from './groupInput.module.css';
import React from 'react';

const GroupInput = ({
  onAddGroup,
  on
}) => {
  let input;
  return (
    <div className={on ? style.div : style.hiden}>
      <input placeholder="group\'s name" className={style.input} ref={node => input = node}/>
      <button className={style.button} onClick={() => {
        onAddGroup(input.value);
        input.value = '';
      }}> Ok </button>
    </div>
  )
}
export default GroupInput;
