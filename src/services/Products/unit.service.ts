/* eslint-disable comma-dangle */
/* eslint-disable max-len */
import { AxiosResponse } from 'axios';
import axios from '@utils/axios';
import { GetUnitsResponse } from '@interfaces/Product/unit.interface';

const api = '/api/v1/unit';

export const getUnitService = async (): Promise<AxiosResponse<GetUnitsResponse, GetUnitsResponse>> => {
  return axios.get(`${api}`);
};

export const getUnitService2 = async (): Promise<AxiosResponse<GetUnitsResponse, GetUnitsResponse>> => {
  return axios.get(`${api}`);
};
