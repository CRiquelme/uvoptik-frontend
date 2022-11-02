import React from 'react';
import Image from 'next/image';
import 'primeflex/primeflex.css';
import logo from '@public/images/logo.jpg';
import styles from './Navbar.module.scss';
const Navbar = () => {
  return (
    <section className="card" id={styles.navbar}>
      <div className="col-12">
        <Image src={logo} alt="Logo" width={200} height={40} />
      </div>
    </section>
  );
};

export default Navbar;
