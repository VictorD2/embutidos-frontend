import * as Yup from 'yup';

export const productEditSchema = {
  quantity: Yup.number().required('El campo cantidad es requerido').positive('El número debe ser positivo'),
};
export const productAddSchema = {
  quantity: Yup.number().required('El campo cantidad es requerido').positive('El número debe ser positivo'),
};
