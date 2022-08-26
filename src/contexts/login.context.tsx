import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ILoginContext, initialStateLogin, initialStateRegister } from '@interfaces/login.interface';
import { IUser } from '@interfaces/auth.interface';
import ClsAuth from '@class/ClsAuth';
import useAuth from '@hooks/useAuth';

export const LoginContext = React.createContext({} as ILoginContext);

// eslint-disable-next-line no-undef
export const LoginProvider = ({ children }: { children: JSX.Element }) => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();
  const { setUser } = useAuth();

  // Schema Login
  const LoginSchema = {
    email: Yup.string().required('Este campo es obligatorio').email('El correo no tiene un formato adecuado'),
    password: Yup.string()
      .required('Este campo es obligatorio')
      .min(8, 'La contraseña tiene que ser de minimo 8 caracteres '),
  };

  // Schema Register
  const RegisterSchema = {
    email: Yup.string().required('Este campo es obligatorio').email('El correo no tiene un formato adecuado'),
    password: Yup.string()
      .required('Este campo es obligatorio')
      .min(8, 'La contraseña tiene que ser de minimo 8 caracteres '),
    repeatPassword: Yup.string()
      .required('Este campo es obligatorio')
      .min(8, 'La contraseña tiene que ser de minimo 8 caracteres '),
    name: Yup.string().required('Este campo es obligatorio'),
    address: Yup.string().optional(),
    phone: Yup.string().optional().length(9, 'El telefono debe ser de 9 números'),
    ruc: Yup.string()
      .required('Este campo es obligatorio')
      .matches(/^[0-9]{8}(?:-[0-9]{2})?$/, 'El dni o ruc no coincide el tamaño de digitos'),
  };

  // Submit Login
  const formikLogin = useFormik({
    initialValues: initialStateLogin,
    initialErrors: initialStateLogin,
    validationSchema: Yup.object(LoginSchema),
    validateOnChange: false,
    onSubmit: async formValue => {
      setLoading(true);
      // Message Please Wait...
      let toastId = toast.loading('Por favor espere...');
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
        console.log(user);
        if ((user.rol.name = 'Administrador')) return router.push('/dashboard/pedidos');
        router.push('/');
      } catch (error: any) {
        let errorMessage = error.message;
        if (error.response) {
          if (error.response.data) {
            if (error.response.data.message) errorMessage = error.response.data.message;
          }
        }
        // Message Error
        toast.update(toastId, {
          render: errorMessage,
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

  // Submit Register
  const formikRegister = useFormik({
    initialValues: initialStateRegister,
    initialErrors: initialStateRegister,
    validationSchema: Yup.object(RegisterSchema),
    validateOnChange: false,
    onSubmit: async formValue => {
      setLoading(true);
      // Message Please Wait...
      let toastId = toast.loading('Por favor espere...');
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
        let errorMessage = error.message;
        if (error.response) {
          if (error.response.data) {
            if (error.response.data.message) errorMessage = error.response.data.message;
          }
        }
        // Message Error
        toast.update(toastId, {
          render: errorMessage,
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
