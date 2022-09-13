/* eslint-disable operator-linebreak */
/* eslint-disable max-len */
/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable comma-dangle */
/* eslint-disable arrow-parens */
import React from 'react';
import { ChevronDownIcon, ChevronUpIcon, PencilIcon, TrashIcon } from '@heroicons/react/outline';
import { useProducto } from '@contexts/products.context';
import { IProducto } from '@interfaces/Product/producto.interface';
import AppTable from '@shared/app_table';
import AppButton from '@shared/app_button';
import AppPaginate from '@shared/app_paginate';

const TABLE_LABELS = [
  { field: 'internCode', label: 'Código', orderBy: true },
  { field: 'name', label: 'Producto', orderBy: true },
  { field: 'stock', label: 'Cant', orderBy: true },
  { field: 'priceCost', label: 'Precio', orderBy: true },
  { field: '', label: 'Opciones', orderBy: false },
];

const ProductsTable = () => {
  const {
    productos,
    opts,
    setOpts,
    orderBy,
    fieldState,
    orderState,
    setOpenModal,
    formikProduct,
    setCreateProduct,
    setOpenConfirm,
    productsQuantity,
    loadingData,
  } = useProducto();

  const handleClickChevronUp = (e: React.MouseEvent<HTMLOrSVGElement>) => {
    if (e.currentTarget.dataset.title) {
      orderBy(e.currentTarget.dataset.title as 'internCode' | 'name' | 'stock' | 'priceCost', 'asc');
    }
  };

  const handleClickChevronDown = (e: React.MouseEvent<HTMLOrSVGElement>) => {
    if (e.currentTarget.dataset.title) {
      orderBy(e.currentTarget.dataset.title as 'internCode' | 'name' | 'stock' | 'priceCost', 'desc');
    }
  };

  // Button edit in table
  const handleEditButton = (product: IProducto) => {
    formikProduct.setFieldValue('id', product.id);
    formikProduct.setFieldValue('internCode', product.internCode);
    formikProduct.setFieldValue('barCode', product.barCode);
    formikProduct.setFieldValue('name', product.name);
    formikProduct.setFieldValue('peso', product.peso);
    formikProduct.setFieldValue('priceCost', product.priceCost);
    formikProduct.setFieldValue('stock', product.stock);
    formikProduct.setFieldValue('photo', product.photo);
    formikProduct.setFieldValue('priceMinor', product.priceMinor);
    formikProduct.setFieldValue('priceMayor', product.priceMayor);
    formikProduct.setFieldValue('category_id', product.category_id);
    formikProduct.setFieldValue('brand_id', product.brand_id);
    formikProduct.setFieldValue('store_id', product.store_id);
    formikProduct.setFieldValue('unit_id', product.unit_id);
    formikProduct.setFieldValue('category', product.category);
    formikProduct.setFieldValue('unit', product.unit);
    formikProduct.setFieldValue('brand', product.brand);
    formikProduct.setFieldValue('store', product.store);
    setCreateProduct(false);
    setOpenModal(true);
  };

  // Button edit in table
  const handleTrashButton = (product: IProducto) => {
    formikProduct.setFieldValue('id', product.id);
    formikProduct.setFieldValue('internCode', product.internCode);
    formikProduct.setFieldValue('barCode', product.barCode);
    formikProduct.setFieldValue('name', product.name);
    formikProduct.setFieldValue('peso', product.peso);
    formikProduct.setFieldValue('priceCost', product.priceCost);
    formikProduct.setFieldValue('stock', product.stock);
    formikProduct.setFieldValue('photo', product.photo);
    formikProduct.setFieldValue('priceMinor', product.priceMinor);
    formikProduct.setFieldValue('priceMayor', product.priceMayor);
    formikProduct.setFieldValue('category_id', product.category_id);
    formikProduct.setFieldValue('brand_id', product.brand_id);
    formikProduct.setFieldValue('store_id', product.store_id);
    formikProduct.setFieldValue('unit_id', product.unit_id);
    formikProduct.setFieldValue('category', product.category);
    formikProduct.setFieldValue('unit', product.unit);
    formikProduct.setFieldValue('brand', product.brand);
    formikProduct.setFieldValue('store', product.store);
    setOpenConfirm(true);
  };

  const columns = (
    <tr>
      {TABLE_LABELS.map(item => {
        return (
          <th
            key={item.label}
            className={`px-3 py-3 border-0 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
              fieldState === item.field ? 'border-b-2 border-b-primary' : ''
            }`}
          >
            <div className="w-full h-full flex gap-1 items-center justify-start">
              {item.label}
              {item.orderBy && (
                <div className="flex flex-col">
                  <ChevronUpIcon
                    data-title={item.field}
                    onClick={handleClickChevronUp}
                    className={`w-3 ${
                      fieldState === item.field && orderState === 'asc' ? 'text-black' : 'text-gray-400'
                    }`}
                  />
                  <ChevronDownIcon
                    data-title={item.field}
                    onClick={handleClickChevronDown}
                    className={`w-3 ${
                      fieldState === item.field && orderState === 'desc' ? 'text-black' : 'text-gray-400'
                    }`}
                  />
                </div>
              )}
            </div>
          </th>
        );
      })}
    </tr>
  );

  const rows = productos.map((item, i) => {
    return (
      <tr
        key={`${item.id}product`}
        className={`${i % 2 === 0 ? 'bg-gray-50 hover:bg-gray-100' : 'bg-gray-100 hover:bg-gray-200'}`}
      >
        <td className="px-6 whitespace-nowrap text-sm font-medium text-gray-900 w-10">{item.internCode}</td>
        <td className=" px-6 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
        <td className=" px-6 whitespace-nowrap text-sm font-medium text-gray-900 w-10">{item.stock}</td>
        <td className=" px-6 whitespace-nowrap text-sm font-medium text-gray-900 w-10">{item.priceCost.toFixed(2)}</td>
        <td className=" px-6 whitespace-nowrap text-sm font-medium text-gray-900 w-10 p-1">
          <div className="w-full h-full flex justify-center gap-2">
            <AppButton
              className="w-8 h-8"
              padding="p-0"
              bgColor="bg-yellow-400"
              onClick={() => {
                handleEditButton(item);
              }}
            >
              <PencilIcon className="w-6" />
            </AppButton>
            <AppButton
              padding="p-0"
              className="w-8 h-8"
              bgColor="bg-red-400"
              onClick={() => {
                handleTrashButton(item);
              }}
            >
              <TrashIcon className="w-6" />
            </AppButton>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div className="px-4 bg-gray-50 rounded-t-lg">
        <AppPaginate opts={opts} setOpts={setOpts} count={productsQuantity} />
      </div>
      <AppTable
        emptyMessage="No hay productos registrados aún"
        loading={loadingData}
        heightLoading="h-[100vh]"
        columns={columns}
        rows={rows}
        count={rows.length}
      />
      <div className="px-4 bg-background">
        <AppPaginate opts={opts} setOpts={setOpts} count={productsQuantity} />
      </div>
    </>
  );
};

export default ProductsTable;
