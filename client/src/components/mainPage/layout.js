import style from './layout.module.css';
import React from 'react';
import HidenComponents from './hidenComponents/hidenComponents';
import Navbar from './navbar/navbar';
import Content from './content/content';

const Layout = () => {
  return (
    <div>
      <HidenComponents />
      <Navbar />
      <Content />
    </div>
  )
}
export default Layout;
