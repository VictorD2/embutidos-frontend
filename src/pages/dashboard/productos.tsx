import React from 'react';
import { NextPage } from 'next';
import ProductosPage from '@components/Dashboard/Productos/ProductosPage';
import { ProductoProvider } from '@contexts/products.context';

const Productos: NextPage = () => {
  return (
    <ProductoProvider>
      <ProductosPage />
    </ProductoProvider>
  );
};

export default Productos;
