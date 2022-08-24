import { FormikProps } from 'formik';
import { Dispatch } from 'react';
import { IUser } from './auth.interface';

export interface ILoginContext {
  isLogin: boolean;
  setIsLogin: Dispatch<boolean>;
  loading: boolean;
  setLoading: Dispatch<boolean>;
  formikLogin: FormikProps<ILogin>;
  formikRegister: FormikProps<IRegister>;
}

export interface ILogin {
  email: string;
  password: string;
}
export interface IRegister {
  email: string;
  password: string;
  name: string;
  lastname: string;
}

export const initialStateLogin = {
  email: '',
  password: '',
};

export const initialStateRegister = {
  email: '',
  password: '',
  name: '',
  lastname: '',
};

export interface LoginRequest {
  success: string;
  token: string;
  user: IUser;
}
