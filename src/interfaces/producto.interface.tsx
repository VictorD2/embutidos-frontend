import { Dispatch } from 'react';

export interface IProductosContext {
  productos: IProducto[];
  setProductos: Dispatch<IProducto[]>;
  openModal: boolean;
  setOpenModal: Dispatch<boolean>;
  photoModal: string;
  setPhotoModal: Dispatch<string>;
  filter: (text: string) => void;
}

export interface IProducto {
  id?: number;
  name: string;
  price: number;
  quantity: number;
  photo: string;
}

export const initialStateIProducto: IProducto = {
  name: '',
  price: 0,
  quantity: 0,
  photo: '',
};
