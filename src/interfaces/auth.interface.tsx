import { Dispatch } from 'react';

export interface IAuthContext {
  user: IUser;
  setUser: Dispatch<IUser>;
}

export interface IUser {
  exp?: number;
}

export const initialStateUser = {};
