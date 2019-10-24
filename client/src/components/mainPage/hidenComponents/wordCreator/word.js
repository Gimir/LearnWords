import style from './css/word.module.css';
import React from 'react';
import CloseBtn from '../../../buttons/closeBtn';
import { removeWord } from '../../../../actions/actions';

const Word = ({
  word = 'Word',
  translate = 'Translate',
  dispatch,
  id
}) => {
  return (
    <div className={style.word}>
      <CloseBtn onBtnClick={() => {
        dispatch(removeWord(id))
      }} absolute={{position: 'absolute', right: 0, top: 0}}>x</CloseBtn>
      <div className={style.word_left}>
        <h2> {word} </h2>
      </div>
      <div className={style.word_right}>
        <h2> {translate} </h2>
      </div>
    </div>
  );
};

export default Word;
