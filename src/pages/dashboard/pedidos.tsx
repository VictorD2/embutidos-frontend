import PedidosPage from '@components/Dashboard/Pedidos/PedidosPage';
import { ClientProvider } from '@contexts/client.context';
import { PedidoProvider } from '@contexts/pedidos.context';
import { ProductoProvider } from '@contexts/products.context';
import { NextPage } from 'next';
import React from 'react';

const Pedidos: NextPage = () => {
  return (
    <PedidoProvider>
      <div>
        <ProductoProvider>
          <div>
            <ClientProvider>
              <PedidosPage />
            </ClientProvider>
          </div>
        </ProductoProvider>
      </div>
    </PedidoProvider>
  );
};

export default Pedidos;
