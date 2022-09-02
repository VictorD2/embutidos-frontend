import { Dispatch } from 'react';

export interface IProducto {
  id?: number;
  name: string;
  price: number;
  quantity: number;
  photo: string;
}
export interface IProductosContext {
  productos: IProducto[];
  setProductos: Dispatch<IProducto[]>;
  openModal: boolean;
  setOpenModal: Dispatch<boolean>;
  photoModal: string;
  setPhotoModal: Dispatch<string>;
  // eslint-disable-next-line no-unused-vars
  filter: (text: string) => void;
}

export interface GetProductsResponse {
  success: string;
  products: IProducto[];
}

export const initialStateIProducto: IProducto = {
  name: '',
  price: 0,
  quantity: 0,
  photo: '',
};
