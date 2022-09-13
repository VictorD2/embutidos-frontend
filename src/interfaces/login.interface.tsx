import { FormikProps } from 'formik';
import { Dispatch } from 'react';
import { IUser } from '@interfaces/auth.interface';

export interface ILogin {
  email: string;
  password: string;
}
export interface IRegister {
  email: string;
  password: string;
  repeatPassword: string;
  name: string;
  address: string;
  ruc: string;
  phone: string;
}
export interface ILoginContext {
  isLogin: boolean;
  setIsLogin: Dispatch<boolean>;
  loading: boolean;
  setLoading: Dispatch<boolean>;
  formikLogin: FormikProps<ILogin>;
  formikRegister: FormikProps<IRegister>;
}

export const initialStateLogin = {
  email: '',
  password: '',
};

export const initialStateRegister = {
  email: '',
  password: '',
  repeatPassword: '',
  name: '',
  address: '',
  ruc: '',
  phone: '',
};

export interface LoginRequest {
  success: string;
  token: string;
  user: IUser;
}
