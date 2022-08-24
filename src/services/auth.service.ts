import { ILogin, IRegister, LoginRequest } from '../interfaces/login.interface';
import { AxiosResponse } from 'axios';
import axios from '@utils/axios';

const api = `/api/v1/auth`;

// Service Login
export const loginService = async (login: ILogin): Promise<AxiosResponse<LoginRequest, any>> => {
  return await axios.post(`${api}/signin`, login);
};

// Service Login
export const registerService = async (login: IRegister): Promise<AxiosResponse<LoginRequest, any>> => {
  return await axios.post(`${api}/signup`, login);
};
