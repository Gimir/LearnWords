import style from './tab.module.css';
import React from 'react';
import CloseBtn from '../../../buttons/closeBtn';

const Tab = ({
  name = 'group',
  id,
  current,
  onTabClick,
  onCloseClick
}) => {
  return (
    <div className={current ? style.div + ' ' + style.selected : style.div} >
      <h3 className={style.h3} onClick={()=>onTabClick(id)}> {name} </h3>
      <CloseBtn onBtnClick={()=>onCloseClick(id)} absolute={{position: 'absolute', top: '-10px', right: 0}}>x</CloseBtn>
    </div>
  );
}
export default Tab;
