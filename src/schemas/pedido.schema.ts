import * as Yup from 'yup';

export const productEditSchema = {
  stock: Yup.number().required('El campo cantidad es requerido').positive('El número debe ser positivo'),
};
export const productAddSchema = {
  name: Yup.string().required('El campo nombre es requerido'),
  internCode: Yup.string().required('El campo código interno es requerido'),
  barCode: Yup.string().required('El campo código de barra es requerido'),
  priceCost: Yup.number().required('El campo precio es requerido').positive('El número debe ser positivo'),
  peso: Yup.number().required('El campo precio es requerido').positive('El número debe ser positivo'),
  priceMayor: Yup.number().required('El campo precio es requerido').positive('El número debe ser positivo'),
  priceMinor: Yup.number().required('El campo precio es requerido').positive('El número debe ser positivo'),
  stock: Yup.number().required('El campo cantidad es requerido').positive('El número debe ser positivo'),
  category_id: Yup.number().required('El campo cantidad es requerido').positive('Seleccione una opción'),
  store_id: Yup.number().required('El campo cantidad es requerido').positive('Seleccione una opción'),
  brand_id: Yup.number().required('El campo cantidad es requerido').positive('Seleccione una opción'),
  unit_id: Yup.number().required('El campo cantidad es requerido').positive('Seleccione una opción'),
  photo: Yup.string().optional().url('El formato es incorrecto').nullable(),
};
export const productSearchSchema = {
  filter: Yup.string().optional(),
};
