import { FormikProps } from 'formik';
import { Dispatch } from 'react';
import { IBrand } from '@interfaces/Product/brand.interface';
import { ICategory } from '@interfaces/Product/category.interface';
import { IStore } from '@interfaces/Product/store.interface';
import { IUnit } from '@interfaces/Product/unit.interface';

export interface Opts {
  limit: number;
  page: number;
  filter: string;
}

export const initialStateOpts: Opts = {
  limit: 25,
  page: 1,
  filter: '',
};

export interface IProducto {
  id: number;
  name: string;
  internCode: string;
  barCode: string;
  photo?: string;
  peso: number;
  priceCost: number;
  stock: number;
  priceMayor: number;
  priceMinor: number;
  brand_id: number;
  category_id: number;
  store_id: number;
  unit_id: number;
  brand: IBrand;
  category: ICategory;
  unit: IUnit;
  store: IStore;
}

export const initialStateIProducto: IProducto = {
  id: 0,
  name: '',
  internCode: '',
  barCode: '',
  peso: 0,
  priceCost: 0,
  stock: 0,
  priceMayor: 0,
  priceMinor: 0,
  brand_id: 0,
  category_id: 0,
  store_id: 0,
  unit_id: 0,
  photo: '',
  brand: {
    id: 0,
    name: '',
  },
  category: {
    id: 0,
    name: '',
  },
  unit: {
    id: 0,
    name: '',
  },
  store: {
    id: 0,
    name: '',
  },
};

export interface ISearch {
  filter: string;
}

export const initialStateSearch = {
  filter: '',
};

export interface IProductosContext {
  productos: IProducto[];
  setProductos: Dispatch<IProducto[]>;
  openModal: boolean;
  setOpenModal: Dispatch<boolean>;
  photoModal: string;
  setPhotoModal: Dispatch<string>;
  // eslint-disable-next-line no-unused-vars
  orderBy: (filed: 'internCode' | 'name' | 'stock' | 'priceCost', order: 'asc' | 'desc') => void;
  fieldState: string;
  orderState: string;
  formikProduct: FormikProps<IProducto>;
  formikSearch: FormikProps<ISearch>;
  createProduct: boolean;
  setCreateProduct: Dispatch<boolean>;
  openConfirm: boolean;
  setOpenConfirm: Dispatch<boolean>;
  opts: Opts;
  setOpts: Dispatch<Opts>;
  productsQuantity: number;
  sendingData: boolean;
  loadingData: boolean;
  setLoadingData: Dispatch<boolean>;
}

export interface GetProductsResponse {
  success: string;
  products: IProducto[];
  quantity: number;
}
export interface CreateProductsResponse {
  success: string;
  product: IProducto;
}
