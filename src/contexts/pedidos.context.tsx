import React, { useEffect, useState } from 'react';

import { IPedidosContext, initialStateIPedido, IPedido } from '@interfaces/pedidos.interface';
import { initialStateIProducto, IProducto } from '@interfaces/producto.interface';

export const PedidoContext = React.createContext({} as IPedidosContext);

// eslint-disable-next-line no-undef
export const PedidoProvider = ({ children }: { children: JSX.Element }) => {
  const [pedido, setPedido] = useState<IPedido>(initialStateIPedido);
  const [productosPedido, setProductosPedido] = useState<IProducto[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [productoEdit, setProductoEdit] = useState<IProducto>(initialStateIProducto);

  const getTotal = (): void => {
    let totalPrice = 0;
    productosPedido.forEach(item => (totalPrice += item.price));
    setTotal(totalPrice);
  };

  const buscarProducto = (id: number) => {
    for (let i = 0; i < productosPedido.length; i++) {
      const element = productosPedido[i];
      if (element.id === id) return i;
    }
    return -1;
  };

  useEffect(() => {
    getTotal();
    return () => {
      setTotal(0);
    };
  }, [productosPedido]);

  return (
    <PedidoContext.Provider
      value={{
        productoEdit,
        setProductoEdit,
        buscarProducto,
        total,
        productosPedido,
        setProductosPedido,
        pedido,
        setPedido,
      }}
    >
      {children}
    </PedidoContext.Provider>
  );
};
