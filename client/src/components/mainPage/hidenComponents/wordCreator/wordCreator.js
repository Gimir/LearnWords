import style from './css/wordCreator.module.css';
import React from 'react';
import CloseBtn from '../../../buttons/closeBtn';
import Word from './word';
import AddWordBtn from './addWordBtn';
import SaveBtn from './saveBtn';
import { closeWordCreator, addWord, addDictionary, changeDictionary } from '../../../../actions/actions';


const WordCreator = ({
  dispatch,
  state
}) => {
  let word;
  let translate;
  let name;
  let repeat;
  return (
    <div className={state.wordCreator.action ? style.wrapper : style.hiden}>
      <div className={style.creator}>
        <div className={style.name}>
          <input className={style.name_input} ref={node => name = node} placeholder='Name' />
        </div>
        <CloseBtn onBtnClick={() => {
          dispatch(closeWordCreator());
        }} absolute={{position: 'absolute', top: '-10px', right: 0}}> x </CloseBtn>

        <div className={style.words}>
          {state.wordCreator.list.map(word => {
            return <Word key={word.id} word={word.word} translate={word.translate} id={word.id} dispatch={dispatch} />
          })}
        </div>

        <div className={style.wordInputs}>
            <input placeholder='word' className={style.wordInput} ref={node => word = node} />
            <input placeholder='translate' className={style.wordInput} ref={node => translate = node} />
        </div>

        <AddWordBtn onAddWord={(id) => {
          dispatch(addWord(word.value, translate.value));
          word.value = '';
          translate.value = '';
        }} />

        <SaveBtn dispatch={dispatch} action={state.wordCreator.action} state={state} onSaveClick={() => {

          if (state.wordCreator.action === 'CREATE') {
            dispatch(addDictionary(state.selectedGroup, name.value, state.wordCreator.list.length, repeat.value, state.wordCreator.list));
          }else if (state.wordCreator.action === 'CHANGE') {
            if (!name.value) name.value = state.wordCreator.name;
            if (!repeat.value) repeat.value = state.wordCreator.repeat;
            dispatch(changeDictionary(state.wordCreator.id, state.selectedGroup, name.value, state.wordCreator.list.length, repeat.value, state.wordCreator.list))
          }
          repeat.value = '';
          name.value = '';
          word.value = '';
          translate.value = '';
          dispatch(closeWordCreator());
        }}> {state.wordCreator.action === 'CREATE' ? 'Add dictionary' : 'Save dictionary'} </SaveBtn>
        <div className={style.repeat}>
          <input placeholder="Repeat" className={style.repeat_input} ref={node => repeat = node} />
        </div>
      </div>
    </div>
  );
};

export default WordCreator;
