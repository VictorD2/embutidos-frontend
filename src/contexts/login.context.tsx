/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable arrow-parens */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '@contexts/auth.context';
import { ILoginContext, initialStateLogin, initialStateRegister } from '@interfaces/login.interface';
import { IUser } from '@interfaces/auth.interface';
import { getErrorResponse } from '@utils/helpers';
import { LoginSchema, RegisterSchema } from '@src/schemas/login.schema';
import ClsAuth from '@class/ClsAuth';

export const LoginContext = React.createContext({} as ILoginContext);

// eslint-disable-next-line no-undef
export const LoginProvider = ({ children }: { children: JSX.Element }) => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();
  const { setUser } = useAuth();

  // Submit Login
  const formikLogin = useFormik({
    initialValues: initialStateLogin,
    initialErrors: initialStateLogin,
    validationSchema: Yup.object(LoginSchema),
    validateOnChange: false,
    onSubmit: async formValue => {
      setLoading(true);
      // Message Please Wait...
      const toastId = toast.loading('Por favor espere...');
      try {
        const user: IUser = await ClsAuth.login(formValue);
        // Message Successs
        toast.update(toastId, {
          render: `Bienvenido ${user.name}`,
          type: 'success',
          isLoading: false,
          autoClose: 2000,
          closeButton: true,
          draggable: true,
        });
        setUser(user);
        if (user.rol.name === 'Administrador') return router.push('/dashboard/pedidos');
        return router.push('/');
      } catch (error: any) {
        // Message Error
        toast.update(toastId, {
          render: getErrorResponse(error),
          type: 'warning',
          isLoading: false,
          autoClose: 2000,
          closeButton: true,
          draggable: true,
        });
      }
      return setLoading(false);
    },
  });

  // Submit Register
  const formikRegister = useFormik({
    initialValues: initialStateRegister,
    initialErrors: initialStateRegister,
    validationSchema: Yup.object(RegisterSchema),
    validateOnChange: false,
    onSubmit: async formValue => {
      setLoading(true);
      // Message Please Wait...
      const toastId = toast.loading('Por favor espere...');
      try {
        const user: IUser = await ClsAuth.register(formValue);
        setUser(user);
        // Message Successs
        toast.update(toastId, {
          render: `Bienvenido ${user.name}`,
          type: 'success',
          isLoading: false,
          autoClose: 2000,
          closeButton: true,
          draggable: true,
        });
        router.push('/');
      } catch (error: any) {
        // Message Error
        toast.update(toastId, {
          render: getErrorResponse(error),
          type: 'warning',
          isLoading: false,
          autoClose: 2000,
          closeButton: true,
          draggable: true,
        });
      }
      setLoading(false);
    },
  });

  return (
    <LoginContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        isLogin,
        setIsLogin,
        loading,
        setLoading,
        formikLogin,
        formikRegister,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export function useLogin() {
  const context = React.useContext(LoginContext);
  if (!context) throw new Error('useLogin debe estar dentro del proveedor usuario context');
  return context;
}
