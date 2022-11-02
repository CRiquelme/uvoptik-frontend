import React from 'react';
import { InputText } from 'primereact/inputtext';

const Header = ({ setGlobalFilter }) => {
  return (
    <div className="table-header">
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={setGlobalFilter}
          placeholder="Buscar..."
        />
      </span>
    </div>
  );
};

export default Header;
