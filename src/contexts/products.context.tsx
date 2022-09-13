/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable max-len */
/* eslint-disable comma-dangle */
/* eslint-disable no-empty */
/* eslint-disable arrow-parens */
import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import ClsProducto from '@class/Product/ClsProducto';
import {
  initialStateIProducto,
  initialStateOpts,
  initialStateSearch,
  IProducto,
  IProductosContext,
  Opts,
} from '@interfaces/Product/producto.interface';
import { productAddSchema, productSearchSchema } from '@src/schemas/pedido.schema';
import { getErrorResponse } from '@utils/helpers';

export const ProductoContext = React.createContext({} as IProductosContext);

// eslint-disable-next-line no-undef
export const ProductoProvider = ({ children }: { children: JSX.Element }) => {
  // List of products
  const [productos, setProductos] = useState<IProducto[]>([]);
  const [productsQuantity, setProductsQuantity] = useState<number>(0);
  const [loadingData, setLoadingData] = useState(false);
  const [sendingData, setSendingData] = useState(false);

  // Modal States
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [photoModal, setPhotoModal] = useState<string>('');
  const [createProduct, setCreateProduct] = useState<boolean>(true);

  // Table States
  const [fieldState, setFieldState] = useState<string>('');
  const [orderState, setOrderState] = useState<string>('');

  // Confirm modal
  const [openConfirm, setOpenConfirm] = useState<boolean>(false);

  const [opts, setOpts] = useState<Opts>(initialStateOpts);

  const formikSearch = useFormik({
    initialValues: initialStateSearch,
    validationSchema: Yup.object(productSearchSchema),
    validateOnChange: false,
    validateOnMount: false,
    validateOnBlur: false,
    onSubmit: async formValue => {
      setOpts({ ...opts, filter: formValue.filter });
    },
  });

  const formikProduct = useFormik({
    initialValues: initialStateIProducto,
    validationSchema: Yup.object(productAddSchema),
    validateOnChange: false,
    validateOnMount: false,
    validateOnBlur: false,
    onSubmit: async formValue => {
      const toastId = toast.loading('Por favor espere...');
      setSendingData(true);
      // Create Product
      if (createProduct) {
        try {
          const { product, message } = await ClsProducto.createProduct(formValue);
          toast.update(toastId, {
            render: message,
            type: 'success',
            isLoading: false,
            autoClose: 2000,
            closeButton: true,
            draggable: true,
          });
          setProductos([product, ...productos]);
          setOpenModal(false);
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
        return setSendingData(false);
      }

      // Edit product
      try {
        const { product, message } = await ClsProducto.editProduct(formValue);
        toast.update(toastId, {
          render: message,
          type: 'success',
          isLoading: false,
          autoClose: 2000,
          closeButton: true,
          draggable: true,
        });
        setProductos(
          productos.map(item => {
            if (item.id === product.id) return product;
            return item;
          })
        );
        setOpenModal(false);
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
      return setSendingData(false);
    },
  });

  const getProducts = async () => {
    try {
      setLoadingData(false);
      const { products, quantity } = await ClsProducto.getProducts(opts);
      setLoadingData(true);
      setProductos(products);
      setProductsQuantity(quantity);
    } catch (error) {
      setLoadingData(true);
      setProductos([]);
      setProductsQuantity(0);
    }
  };

  const orderBy = (field: 'internCode' | 'name' | 'stock' | 'priceCost', order: 'asc' | 'desc') => {
    const newProducts = [...productos];
    const sortedProduct = newProducts.sort((item1, item2) => {
      setFieldState(field);
      setOrderState(order);
      if (order === 'asc') {
        if (`${item1[field]}` < `${item2[field]}`) return -1;
        if (`${item1[field]}` > `${item2[field]}`) return 1;
      }
      if (order === 'desc') {
        if (`${item1[field]}` > `${item2[field]}`) return -1;
        if (`${item1[field]}` < `${item2[field]}`) return 1;
      }
      return 0;
    });

    setProductos(sortedProduct);
  };

  useEffect(() => {
    getProducts();
    return () => {
      setProductos([]);
      setOpenModal(false);
      setPhotoModal('');
    };
  }, [opts]);

  return (
    <ProductoContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        formikProduct,
        formikSearch,
        photoModal,
        sendingData,
        setPhotoModal,
        openModal,
        setOpenModal,
        productos,
        setProductos,
        orderBy,
        fieldState,
        orderState,
        createProduct,
        setCreateProduct,
        openConfirm,
        setOpenConfirm,
        opts,
        setOpts,
        productsQuantity,
        loadingData,
        setLoadingData,
      }}
    >
      {children}
    </ProductoContext.Provider>
  );
};

export function useProducto() {
  const context = React.useContext(ProductoContext);
  if (!context) throw new Error('useProducto debe estar dentro del proveedor usuario context');
  return context;
}
