/* eslint-disable max-len */
/* eslint-disable comma-dangle */
/* eslint-disable no-empty */
/* eslint-disable arrow-parens */
import React, { useEffect, useState } from 'react';
import ClsProducto from '@class/ClsProducto';
import { IProducto, IProductosContext } from '@interfaces/producto.interface';

export const ProductoContext = React.createContext({} as IProductosContext);

// eslint-disable-next-line no-undef
export const ProductoProvider = ({ children }: { children: JSX.Element }) => {
  const [productos, setProductos] = useState<IProducto[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [photoModal, setPhotoModal] = useState<string>('');

  const getProducts = async () => {
    try {
      const products = await ClsProducto.getProducts();
      setProductos(products);
    } catch (error) {}
  };

  const filter = (name: string) => {
    if (name === '') return setProductos(ClsProducto.productos);
    return setProductos(
      ClsProducto.productos.filter(product => product.name.toLowerCase().includes(name.toLowerCase()))
    );
  };

  useEffect(() => {
    getProducts();
    return () => {
      setProductos([]);
      setOpenModal(false);
      setPhotoModal('');
    };
  }, []);

  return (
    <ProductoContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        photoModal,
        setPhotoModal,
        openModal,
        setOpenModal,
        productos,
        setProductos,
        filter,
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
