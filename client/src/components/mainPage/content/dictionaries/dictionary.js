import style from './css/dictionary.module.css';
import React from 'react';
import SoundBtn from './soundBtn';
import CartBtn from './cartBtn';
import CloseBtn from '../../../buttons/closeBtn';

const Dictionary = ({
  name,
  words = 0,
  repeat = null,
  id,
  onDictChange,
  onRemoveDict,
  groupId,
  list
}) => {
  return (
    <div className={style.dictionary}>
      <div className={style.name}>
        <h2 className={style.name_h2}> {name} </h2>
      </div>
      <CloseBtn onBtnClick={() => {
        onRemoveDict(id, groupId);
      }} absolute={{position: 'absolute', top: '-10px', right: 0}}> x </CloseBtn>
      <div className={style.body}>
        <div className={style.body_left}>
          <h2 className={style.counter} onClick={() => {
            onDictChange(id, 'CHANGE', name, repeat, list);
          }}> {words} - words </h2>
        </div>
        <div className={style.body_right}>
          <CartBtn />
          <SoundBtn />
        </div>
      </div>
      <div className={style.repeat}>
        <h4 className={style.repeat_h4}> {repeat} </h4>
      </div>
    </div>
  )
}
export default Dictionary;
