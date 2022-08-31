import useProducto from '@hooks/useProducto';
import { AppModal } from '@shared/app_modal';
import React from 'react';
import PedidoSide from './PedidoSide';
import ProductoSide from './ProductoSide';

const PedidosPage = () => {
  const { openModal, setOpenModal, photoModal } = useProducto();
  return (
    <div className="w-full h-full flex lg:gap-2 md:gap-2 gap-8 lg:flex-row md:flex-row flex-col">
      <ProductoSide />
      <PedidoSide />
      <AppModal open={openModal} overflowClosed onClose={() => setOpenModal(false)}>
        <div className="w-full h-full flex justify-center items-center">
          <img className="object-cover" src={photoModal} />
        </div>
      </AppModal>
    </div>
  );
};

export default PedidosPage;
