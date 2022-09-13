/* eslint-disable max-len */
/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable arrow-parens */
import React from 'react';
import { PencilIcon, PlusCircleIcon } from '@heroicons/react/outline';
import AppBreadCrumb from '@shared/app_breadcrums';
import AppButton from '@shared/app_button';
import AppControls from '@shared/app_controls';
import AppInputText from '@shared/app_input_text';
import ProductsTable from '@components/Dashboard/Productos/ProductsTable';
import AppModal from '@shared/app_modal';
import { useProducto } from '@contexts/products.context';
import ProductoModal from '@components/Dashboard/Productos/ProductoModal';
import AppConfirm from '@shared/app_confirm';

const ProductosPage = () => {
  const {
    openModal,
    setOpenModal,
    formikProduct,
    createProduct,
    setCreateProduct,
    openConfirm,
    setOpenConfirm,
    formikSearch,
  } = useProducto();

  // Button xIcon in modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Button Create product
  const handleCreateProduct = () => {
    formikProduct.resetForm();
    setCreateProduct(true);
    setOpenModal(true);
  };

  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formikSearch.submitForm();
  };

  return (
    <>
      {/* BreadCrums */}
      <AppBreadCrumb routes={[{ name: 'Productos', link: '/dashboard/productos' }]} />
      {/* PageName */}
      <div className="mt-3 font-bold text-2xl capitalize hover:text-primary transition-all duration-500">Productos</div>

      <AppControls>
        <form onSubmit={handleSubmitSearch} className="flex flex-col items-start lg:w-1/3">
          <AppInputText
            width="w-full"
            placeholder="Buscar producto..."
            className="focus:border-[1px] focus:border-secondary transition-all duration-500"
            name="searchProduct"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              formikSearch.setFieldValue('filter', e.target.value);
            }}
            value={formikSearch.values.filter}
          />
        </form>
        <AppButton type="button" bgColor="bg-secondary" onClick={handleCreateProduct}>
          <div className="flex gap-2">
            <PlusCircleIcon className="w-[25px]" />
            Agregar producto
          </div>
        </AppButton>
      </AppControls>
      <div className="bg-white rounded-lg shadow-lg mt-4">
        <ProductsTable />
      </div>
      <AppModal
        width="lg:w-1/2 md:w-1/2 sm:w-1/2 w-full"
        headerBgColor={createProduct ? 'bg-secondary' : 'bg-gradient-to-r from-yellow-500 to-yellow-300'}
        headerColor={createProduct ? 'text-white' : 'text-black'}
        IconHeader={createProduct ? PlusCircleIcon : PencilIcon}
        headerText={createProduct ? 'Crear producto' : 'Editar producto'}
        open={openModal}
        onClose={handleCloseModal}
      >
        <ProductoModal />
      </AppModal>
      <AppConfirm
        setOpen={setOpenConfirm}
        open={openConfirm}
        onConfirm={() => {
          // deleteFromList();
        }}
        message="¿Seguro que desea eliminar este producto de la lista?"
      />
    </>
  );
};

export default ProductosPage;
