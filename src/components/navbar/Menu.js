import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import Link from 'next/link';
const Menu = () => {
  const [visibleLeft, setVisibleLeft] = useState(false);
  return (
    <>
      <Sidebar visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
        <h3>Menú</h3>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/productos">Productos</Link>
          </li>
        </ul>
      </Sidebar>
      <Button icon="pi pi-arrow-right" onClick={(e) => setVisibleLeft(true)} />
    </>
  );
};

export default Menu;
