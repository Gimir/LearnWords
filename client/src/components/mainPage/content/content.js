import style from './css/content.module.css';
import React from 'react';
import Count from './count';
import Dictionaries from './dictionaries/dictionaries';
import AddBtn from './addBtn';


const Content = () => {
  return (
    <div className={style.div}>
      <Count />
      <Dictionaries />
      <div className={style.addBtn}>
        <AddBtn />
      </div>
    </div>
  );
};

export default Content;
