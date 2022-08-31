import { Dispatch } from 'react';
import { IProducto } from './producto.interface';

export interface IPedidosContext {
  pedido: IPedido;
  setPedido: Dispatch<IPedido>;
  productosPedido: IProducto[];
  setProductosPedido: Dispatch<IProducto[]>;
  buscarProducto: (id: number) => number;
  total: number;
  productoEdit: IProducto;
  setProductoEdit: Dispatch<IProducto>;
}

export interface IPedido {}

export const initialStateIPedido: IPedido = {};
