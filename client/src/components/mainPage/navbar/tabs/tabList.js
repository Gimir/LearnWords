import style from './tabList.module.css';
import React from 'react';
import Tab from './tab';

const tabList = ({
  groups,
  current,
  onTabClick,
  onCloseClick
}) => {
  return (
    <div className={style.list}>
      {groups.map(group => {
        return <Tab id={group.id} key={group.id} name={group.name} current={current === group.id} onTabClick={onTabClick} onCloseClick={onCloseClick} />
      })}
    </div>
  );
}
export default tabList;
