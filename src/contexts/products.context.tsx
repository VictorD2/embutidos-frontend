import ClsPedido from '@class/ClsPedido';
import ClsProducto from '@class/ClsProducto';
import { IProducto, IProductosContext } from '@interfaces/producto.interface';
import React, { useEffect, useState } from 'react';

export const ProductoContext = React.createContext({} as IProductosContext);

export const ProductoProvider = ({ children }: { children: JSX.Element }) => {
  const [productos, setProductos] = useState<IProducto[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [photoModal, setPhotoModal] = useState<string>('');

  const getProducts = async () => {
    setProductos(ClsProducto.productos);
  };

  const filter = (name: string) => {
    if (name === '') return setProductos(ClsPedido.productos);
    setProductos(ClsPedido.productos.filter(product => product.name.toLowerCase().includes(name.toLowerCase())));
  };

  useEffect(() => {
    getProducts();
    return () => {
      setProductos([]);
    };
  }, []);

  return (
    <ProductoContext.Provider
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
