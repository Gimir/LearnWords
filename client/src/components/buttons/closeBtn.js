import style from './css/closeBtn.module.css';
import React from 'react';

const CloseBtn = ({
  onBtnClick,
  children,
  absolute = null
}) => {
  return (
    <button className={style.button} style={absolute ? absolute : {}} onClick={()=>onBtnClick()}>{children}</button>
  );
};

export default CloseBtn;
