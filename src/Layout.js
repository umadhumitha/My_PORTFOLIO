import React from 'react';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <div>
      <Nav/>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
