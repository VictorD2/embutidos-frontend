/* eslint-disable comma-dangle */
/* eslint-disable max-len */
import { AxiosResponse } from 'axios';
import axios from '@utils/axios';
import { GetCategoriesResponse } from '@interfaces/Product/category.interface';

const api = '/api/v1/category';

export const getCategoryService = async (): Promise<AxiosResponse<GetCategoriesResponse, GetCategoriesResponse>> => {
  return axios.get(`${api}`);
};

export const getCategoryService2 = async (): Promise<AxiosResponse<GetCategoriesResponse, GetCategoriesResponse>> => {
  return axios.get(`${api}`);
};
