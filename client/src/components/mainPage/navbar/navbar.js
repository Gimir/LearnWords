import style from './css/navbar.module.css';
import React from 'react';
import LogOut from './logOut';
import Tabs from './tabs/tabs';
import ShowInput from './showInput/showInput';
import Input from './input/input';


const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.top}>
        <h2> Learn Words </h2>
        <LogOut />
      </div>
      <div className={style.bottom}>
        <Tabs />
        <Input />
        <ShowInput />
      </div>
    </nav>
  )
}

export default Navbar;
