/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable arrow-parens */
import React, { useEffect, useState } from 'react';
import { IPedidosContext, initialStateIPedido, IPedido } from '@interfaces/pedidos.interface';

export const PedidoContext = React.createContext({} as IPedidosContext);

// eslint-disable-next-line no-undef
export const PedidoProvider = ({ children }: { children: JSX.Element }) => {
  const [pedido, setPedido] = useState<IPedido>(initialStateIPedido);
  const [productosPedido, setProductosPedido] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0);

  const getTotal = (): void => {
    let totalPrice = 0;
    // eslint-disable-next-line no-return-assign
    productosPedido.forEach(item => (totalPrice += item.priceCost * item.stock));
    setTotal(totalPrice);
  };

  useEffect(() => {
    getTotal();
    return () => {
      setTotal(0);
    };
  }, [productosPedido]);

  return (
    <PedidoContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
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

export function usePedido() {
  const context = React.useContext(PedidoContext);
  if (!context) throw new Error('usePedido debe estar dentro del proveedor usuario context');
  return context;
}
