import React from 'react';
import { NextPage } from 'next';
import PedidosPage from '@components/Dashboard/Pedidos/PedidosPage';
import { ClientProvider } from '@contexts/client.context';
import { PedidoProvider } from '@contexts/pedidos.context';
import { ProductoProvider } from '@contexts/products.context';

const Pedidos: NextPage = () => {
  return (
    <PedidoProvider>
      <ProductoProvider>
        <ClientProvider>
          <PedidosPage />
        </ClientProvider>
      </ProductoProvider>
    </PedidoProvider>
  );
};

export default Pedidos;
