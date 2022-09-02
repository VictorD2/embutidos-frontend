import React from 'react';
import PedidoSide from '@components/Dashboard/Pedidos/PedidoSide/PedidoSide';
import ProductoSide from '@components/Dashboard/Pedidos/ProductSide/ProductoSide';
import AppModal from '@shared/app_modal';
import { PedidoSideProvider } from '@contexts/pedidoSide.context';
import { useProducto } from '@contexts/products.context';

const PedidosPage = () => {
  const { openModal, setOpenModal, photoModal } = useProducto();
  return (
    <div className="w-full h-full flex lg:gap-2 md:gap-2 gap-8 lg:flex-row md:flex-row flex-col">
      <ProductoSide />
      <PedidoSideProvider>
        <PedidoSide />
      </PedidoSideProvider>
      <AppModal open={openModal} overflowClosed onClose={() => setOpenModal(false)}>
        <div className="w-full h-full flex justify-center items-center">
          <img alt={photoModal} className="object-cover" src={photoModal} />
        </div>
      </AppModal>
    </div>
  );
};

export default PedidosPage;
