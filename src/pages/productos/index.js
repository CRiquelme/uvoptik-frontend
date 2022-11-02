import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import ActionBodyTemplate from './ActionBodyTemplate';
import Header from './Header';

export const getStaticProps = async () => {
  const res = await fetch('https://sis.uvoptik.cl/rest-productos');
  const data = await res.json();
  return {
    props: { products: data.data },
  };
};

const Index = ({ products }) => {
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);
  const dt = useRef(null);

  return (
    <div>
      <h1>Productos</h1>

      <div className="card">
        <DataTable
          ref={dt}
          value={products}
          selection={selectedProducts}
          onSelectionChange={(e) => setSelectedProducts(e.value)}
          dataKey="id"
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25]}
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          currentPageReportTemplate="Mostrando {first} a {last} de {totalRecords} productos"
          globalFilter={globalFilter}
          header={
            <Header setGlobalFilter={(e) => setGlobalFilter(e.target.value)} />
          }
          responsiveLayout="scroll"
        >
          <Column
            field="id_producto"
            header="ID"
            sortable
            style={{ minWidth: '12rem' }}
          ></Column>
          <Column
            field="modelo"
            header="Producto"
            sortable
            style={{ minWidth: '16rem' }}
          ></Column>
          <Column
            field="nombre_cat_pro"
            header="Categoría"
            sortable
            style={{ minWidth: '10rem' }}
          ></Column>
          <Column
            field="nombre_proveedor"
            header="Proveedores"
            sortable
            style={{ minWidth: '10rem' }}
          ></Column>
          <Column
            field="nombre_marca"
            header="Marca"
            sortable
            style={{ minWidth: '10rem' }}
          ></Column>
          <Column
            field="cod_barra"
            header="Cód. Barra"
            sortable
            style={{ minWidth: '10rem' }}
          ></Column>
          <Column
            body={ActionBodyTemplate}
            exportable={false}
            style={{ minWidth: '8rem' }}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default Index;
