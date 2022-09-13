import * as Yup from 'yup';

export const LoginSchema = {
  email: Yup.string().required('Este campo es obligatorio').email('El correo no tiene un formato adecuado'),
  password: Yup.string()
    .required('Este campo es obligatorio')
    .min(8, 'La contraseña tiene que ser de minimo 8 caracteres '),
};

export const RegisterSchema = {
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
