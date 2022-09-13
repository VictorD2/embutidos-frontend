/* eslint-disable arrow-parens */
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { IPedidoSideContext } from '@interfaces/pedidos.interface';
import { initialStateIProducto } from '@interfaces/Product/producto.interface';
import { productEditSchema } from '@src/schemas/pedido.schema';
import { usePedido } from '@contexts/pedidos.context';

export const PedidoSideContext = React.createContext({} as IPedidoSideContext);

// eslint-disable-next-line no-undef
export const PedidoSideProvider = ({ children }: { children: JSX.Element }) => {
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const { productosPedido, setProductosPedido } = usePedido();

  const formikProductEdit = useFormik({
    initialValues: initialStateIProducto,
    validationSchema: Yup.object(productEditSchema),
    validateOnChange: true,
    onSubmit: async formValue => {
      setProductosPedido(
        productosPedido.map(item => {
          if (item.id === formValue.id) return { ...item, stock: parseInt(`${formValue.stock}`, 10) };
          return item;
          // eslint-disable-next-line comma-dangle
        })
      );
      setOpenModalEdit(false);
    },
  });

  const deleteFromList = () => {
    setProductosPedido(productosPedido.filter(item => item.id !== formikProductEdit.values.id));
  };

  return (
    <PedidoSideContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        deleteFromList,
        formikProductEdit,
        openModalEdit,
        setOpenModalEdit,
      }}
    >
      {children}
    </PedidoSideContext.Provider>
  );
};

export function usePedidoSide() {
  const context = React.useContext(PedidoSideContext);
  if (!context) throw new Error('usePedidoSide debe estar dentro del proveedor usuario context');
  return context;
}
