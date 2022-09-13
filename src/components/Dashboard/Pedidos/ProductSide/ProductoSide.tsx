/* eslint-disable arrow-parens */
import React, { useState } from 'react';
import { SearchIcon } from '@heroicons/react/outline';
import AppInputText from '@shared/app_input_text';
import AppText from '@shared/app_text';
import ProductoItem from '@components/Dashboard/Pedidos/ProductSide/ProductoItem';
import { useProducto } from '@contexts/products.context';

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const ProductoSide = () => {
  const [search, setSearch] = useState('');
  const { productos } = useProducto();

  const handleSearchChange = (e: InputEvent) => {
    setSearch(e.target.value);
  };

  return (
    <div className="h-full lg:w-1/2 md:w-1/2 w-full flex justify-start p-0 gap-5 flex-col items-center ">
      <AppText as="h3" className="font-bold">
        PRODUCTOS
      </AppText>
      <div className="w-8/12 relative">
        <AppInputText
          borderColor="border-black border-2"
          className="rounded-3xl focus:shadow-secondary focus:shadow-md transition-all duration-300"
          width="w-full"
          placeholder="Buscar producto"
          value={search}
          name="search"
          onChange={handleSearchChange}
        />
        <SearchIcon className="w-5 h-5 absolute right-5 top-3" />
      </div>
      <div className="w-full h-full">
        <AppText textColor="text-gray-500" as="p" className="font-bold">
          Resultados:
        </AppText>
        <div className="lg:min-h-[calc(73.vh-4rem)] md:min-h-[calc(65vh-4rem)] min-h-[calc(50vh-4rem)] lg:max-h-[24rem] md:max-h-[24rem] max-h-[8rem] pr-4 flex flex-col gap-2 overflow-y-auto scrollbar-thin scrollbar-thumb-secondary scrollbar-track-transparent">
          {productos.map(product => {
            return <ProductoItem key={product.id} producto={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductoSide;
