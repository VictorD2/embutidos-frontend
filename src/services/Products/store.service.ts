/* eslint-disable comma-dangle */
/* eslint-disable max-len */
import { AxiosResponse } from 'axios';
import axios from '@utils/axios';
import { GetStoresResponse } from '@interfaces/Product/store.interface';

const api = '/api/v1/store';

export const getStoresService = async (): Promise<AxiosResponse<GetStoresResponse, GetStoresResponse>> => {
  return axios.get(`${api}`);
};

export const getStoresServic2 = async (): Promise<AxiosResponse<GetStoresResponse, GetStoresResponse>> => {
  return axios.get(`${api}`);
};
