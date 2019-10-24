import style from './css/dictList.module.css';
import React from 'react';
import Dictionary from './dictionary';

const dictList = ({
  dictionaries,
  groupId,
  onRemoveDict,
  onDictChange
}) => {
  console.log(dictionaries);
  return (
    <div className={style.dictionaries}>
      {
        dictionaries.map(dict => {
          return <Dictionary onRemoveDict={onRemoveDict} onDictChange={onDictChange} name={dict.name} words={dict.words} repeat={dict.repeat} id={dict.id} key={dict.id} list={dict.list} groupId={groupId} />
        })
      }
    </div>
  );
};

export default dictList;
