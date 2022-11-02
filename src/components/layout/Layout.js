import React from 'react';
import Navbar from '@components/navbar/Navbar';
import { Roboto } from '@next/font/google';
const roboto = Roboto({
  weight: '400',
});
const Layout = ({ children }) => {
  return (
    <div className={`${roboto.className} card`}>
      <Navbar />
      <main className="col-12">{children}</main>
    </div>
  );
};

export default Layout;
