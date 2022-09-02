/* eslint-disable max-len */
import { AxiosResponse } from 'axios';
import axios from '@utils/axios';
import { GetProductsResponse } from '@interfaces/producto.interface';

const api = '/api/v1/product';

// Service Login
export const getProductsService = async (): Promise<AxiosResponse<GetProductsResponse, GetProductsResponse>> => {
  return axios.get(`${api}/`);
};

export const getProductsService2 = async (): Promise<AxiosResponse<GetProductsResponse, GetProductsResponse>> => {
  return axios.get(`${api}/`);
};
