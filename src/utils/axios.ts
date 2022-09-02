/* eslint-disable no-param-reassign */
import axios from 'axios';
// import jwtDecode from 'jwt-decode';
import { API } from '@config/config';
// import { IUser } from '@interfaces/auth.interface';
const baseURL = API;

const request = axios.create({ baseURL });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
request.interceptors.request.use(async (config: any) => {
  const token = await localStorage.getItem('token');
  if (token) {
    // const usuario = jwtDecode<IUser>(token);
    // const secondsSinceEpoch = Math.round(Date.now() / 1000);
    // checking for time expiration of the token
    // if (secondsSinceEpoch > parseInt(usuario.exp + '')) {
    //   await localStorage.removeItem('token');
    //   window.location.href = '/';
    //   return;
    // }
  }
  config.headers.Authorization = `Bearer ${token}`;
  config.headers['Content-Type'] = 'application/json';
  return config;
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
request.interceptors.response.use(async (response: any) => {
  return response;
});

export default request;
