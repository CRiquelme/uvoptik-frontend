import React from 'react';
import Menu from './Menu';
import Image from 'next/image';
import Link from 'next/link';
import 'primeflex/primeflex.css';
import logo from '@public/images/logo.jpg';
import styles from './Navbar.module.scss';
const Navbar = () => {
  return (
    <section className="card" id={styles.navbar}>
      <div className="col-12 grid flex align-items-center flex-row flex-wrap">
        <Image
          src={logo}
          alt="Logo"
          width={200}
          height={40}
          className="col-1"
        />
        <Menu className="col-10" />
      </div>
    </section>
  );
};

export default Navbar;
