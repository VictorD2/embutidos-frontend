/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormikProps } from 'formik';
import { Dispatch } from 'react';
import { IProducto } from '@interfaces/Product/producto.interface';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IPedido {}

export interface IPedidosContext {
  pedido: IPedido;
  setPedido: Dispatch<IPedido>;
  productosPedido: any[];
  setProductosPedido: Dispatch<any[]>;
  total: number;
}

export interface IPedidoSideContext {
  deleteFromList: () => void;
  formikProductEdit: FormikProps<IProducto>;
  openModalEdit: boolean;
  setOpenModalEdit: Dispatch<boolean>;
}

export const initialStateIPedido: IPedido = {};
