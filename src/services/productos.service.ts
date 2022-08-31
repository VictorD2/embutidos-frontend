import { AxiosResponse } from 'axios';
import axios from '@utils/axios';

const api = `/api/v1/producto`;

// Service Login
export const getProductsService = async (): Promise<AxiosResponse<any, any>> => {
  return await axios.get(`${api}/`);
};
