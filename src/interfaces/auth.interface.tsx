import { Dispatch } from 'react';

export interface IAuthContext {
  user: IUser;
  setUser: Dispatch<IUser>;
}

export interface IUser {
  id?: number;
  email: string;
  password: string;
  address: string;
  name: string;
  dni: string;
  comercialName: string;
  phone: string;
  status: boolean;
  rol_id: number;
  rol: {
    id: number;
    name: string;
  };
}

export const initialStateUser = {
  email: '',
  password: '',
  address: '',
  name: '',
  dni: '',
  comercialName: '',
  phone: '',
  status: false,
  rol_id: 2,
  rol: {
    id: 2,
    name: 'Usuario',
  },
};
