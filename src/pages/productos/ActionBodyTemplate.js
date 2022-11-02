import React from 'react';
import { Button } from 'primereact/button';

const ActionBodyTemplate = (rowData) => {
  return (
    <>
      <Button
        icon="pi pi-pencil"
        className="p-button-rounded p-button-success mr-2"
        onClick={() => editProduct(rowData)}
      />
      <Button
        icon="pi pi-trash"
        className="p-button-rounded p-button-warning"
        onClick={() => confirmDeleteProduct(rowData)}
      />
    </>
  );
};

export default ActionBodyTemplate;
