/* eslint-disable comma-dangle */
/* eslint-disable max-len */
import { AxiosResponse } from 'axios';
import axios from '@utils/axios';
import { GetBrandsResponse } from '@interfaces/Product/brand.interface';

const api = '/api/v1/brand';

export const getBrandsService = async (): Promise<AxiosResponse<GetBrandsResponse, GetBrandsResponse>> => {
  return axios.get(`${api}`);
};

export const getBrandsService2 = async (): Promise<AxiosResponse<GetBrandsResponse, GetBrandsResponse>> => {
  return axios.get(`${api}`);
};
