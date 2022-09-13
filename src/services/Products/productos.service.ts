/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint-disable max-len */
import { AxiosResponse } from 'axios';
import axios from '@utils/axios';
import { GetProductsResponse, CreateProductsResponse, Opts, IProducto } from '@interfaces/Product/producto.interface';

const api = '/api/v1/product';

// Service Login
export const getProductsService = async (
  opts: Opts
): Promise<AxiosResponse<GetProductsResponse, GetProductsResponse>> => {
  if (opts.filter !== '' && opts.filter !== undefined) {
    return axios.get(`${api}?limit=${opts.limit}&page=${opts.page}&filter=${opts.filter}`);
  }
  return axios.get(`${api}?limit=${opts.limit}&page=${opts.page}`);
};

export const getProductServiceById = async (
  id: number
): Promise<AxiosResponse<GetProductsResponse, GetProductsResponse>> => {
  return axios.get(`${api}/${id}`);
};

export const createProductService = async (
  product: IProducto
): Promise<AxiosResponse<CreateProductsResponse, CreateProductsResponse>> => {
  if (product.photo === '' || product.photo === null) delete product.photo;
  const {
    name,
    internCode,
    barCode,
    peso,
    priceCost,
    stock,
    priceMayor,
    priceMinor,
    photo,
    brand_id,
    category_id,
    store_id,
    unit_id,
  } = product;
  return axios.post(`${api}/`, {
    name,
    internCode,
    barCode,
    peso,
    priceCost,
    stock,
    priceMayor,
    priceMinor,
    photo,
    brand_id,
    category_id,
    store_id,
    unit_id,
  });
};

export const editProductService = async (
  product: IProducto
): Promise<AxiosResponse<CreateProductsResponse, CreateProductsResponse>> => {
  if (product.photo === '' || product.photo === null) delete product.photo;
  console.log(product);
  const {
    name,
    internCode,
    barCode,
    peso,
    priceCost,
    stock,
    priceMayor,
    priceMinor,
    photo,
    brand_id,
    category_id,
    store_id,
    unit_id,
  } = product;
  return axios.put(`${api}/${product.id}`, {
    name,
    internCode,
    barCode,
    peso,
    priceCost,
    stock,
    priceMayor,
    priceMinor,
    photo,
    brand_id,
    category_id,
    store_id,
    unit_id,
  });
};
