/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable arrow-parens */
import React, { useState, useEffect } from 'react';
import { PencilIcon, PlusCircleIcon } from '@heroicons/react/outline';
import AppInputText from '@shared/app_input_text';
import { useProducto } from '@contexts/products.context';
import AppButton from '@shared/app_button';
import AppComboBox from '@shared/app_combobox';
import ClsCategory from '@class/Product/ClsCategory';
import ClsBrand from '@class/Product/ClsBrand';
import ClsUnit from '@class/Product/ClsUnit';
import ClsStore from '@class/Product/ClsStore';
import { ICategory } from '@interfaces/Product/category.interface';
import { IBrand } from '@interfaces/Product/brand.interface';
import { IUnit } from '@interfaces/Product/unit.interface';
import { IStore } from '@interfaces/Product/store.interface';

type InputEvent = React.ChangeEvent<HTMLInputElement>;
type FocusEvent = React.FocusEvent<HTMLInputElement>;
type FormEvent = React.FormEvent<HTMLFormElement>;

const ProductoModal = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [brands, setBrands] = useState<IBrand[]>([]);
  const [units, setUnits] = useState<IUnit[]>([]);
  const [stores, setStores] = useState<IStore[]>([]);

  const { formikProduct, createProduct, sendingData } = useProducto();

  const handleChangeInput = (e: InputEvent) => {
    formikProduct.setFieldValue(e.target.name, e.target.value);
  };

  const handleFocusInput = (e: FocusEvent) => {
    formikProduct.setFieldError(e.target.name, '');
  };

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    formikProduct.submitForm();
  };

  const getCategories = async () => {
    const res = await ClsCategory.getCategories();
    setCategories(res.categories);
  };
  const getBrands = async () => {
    const res = await ClsBrand.getBrands();
    setBrands(res.brands);
  };
  const getUnits = async () => {
    const res = await ClsUnit.getUnits();
    setUnits(res.units);
  };
  const getStores = async () => {
    const res = await ClsStore.getStores();
    setStores(res.stores);
  };

  useEffect(() => {
    getCategories();
    getBrands();
    getUnits();
    getStores();
    return () => {
      setCategories([]);
      setBrands([]);
      setUnits([]);
      setStores([]);
    };
  }, []);

  return (
    <form
      onSubmit={handleSubmitForm}
      className="w-full h-full justify-center p-5 flex gap-x-8 gap-y-4 lg:flex-row flex-wrap flex-col"
    >
      <AppInputText
        width="lg:w-5/12 w-full"
        className="focus:border-secondary focus:border-[1px] transition-colors duration-500"
        label="Código Interno"
        placeholder="Ingrese el código interno"
        name="internCode"
        required
        value={`${formikProduct.values.internCode ? formikProduct.values.internCode : ''}`}
        helpText={formikProduct.errors.internCode}
        onFocus={handleFocusInput}
        onChange={handleChangeInput}
      />
      <AppInputText
        width="lg:w-5/12 w-full"
        className="focus:border-secondary focus:border-[1px] transition-colors duration-500"
        label="Código de Barra"
        placeholder="Ingrese el código de barra"
        name="barCode"
        required
        value={`${formikProduct.values.barCode ? formikProduct.values.barCode : ''}`}
        helpText={formikProduct.errors.barCode}
        onFocus={handleFocusInput}
        onChange={handleChangeInput}
      />
      <AppInputText
        width="lg:w-5/12 w-full"
        className="focus:border-secondary focus:border-[1px] transition-colors duration-500"
        label="Nombre"
        name="name"
        required
        placeholder="Ingrese el nombre del producto"
        value={formikProduct.values.name}
        helpText={formikProduct.errors.name}
        onFocus={handleFocusInput}
        onChange={handleChangeInput}
      />
      <AppInputText
        width="lg:w-5/12 w-full"
        className="focus:border-secondary focus:border-[1px] transition-colors duration-500"
        label="Cantidad"
        name="stock"
        placeholder="Ingrese la cantidad"
        type="number"
        helpText={formikProduct.errors.stock}
        value={`${formikProduct.values.stock}`}
        onFocus={handleFocusInput}
        onChange={handleChangeInput}
        required
      />
      <AppInputText
        width="lg:w-5/12 w-full"
        className="focus:border-secondary focus:border-[1px] transition-colors duration-500"
        label="Precio"
        name="priceCost"
        required
        placeholder="Ingrese el precio"
        onFocus={handleFocusInput}
        onChange={handleChangeInput}
        helpText={formikProduct.errors.priceCost}
        value={`${formikProduct.values.priceCost}`}
      />
      <AppInputText
        width="lg:w-5/12 w-full"
        className="focus:border-secondary focus:border-[1px] transition-colors duration-500"
        label="Peso"
        name="peso"
        required
        placeholder="Ingrese el peso"
        onFocus={handleFocusInput}
        onChange={handleChangeInput}
        helpText={formikProduct.errors.peso}
        value={`${formikProduct.values.peso}`}
      />
      <AppInputText
        width="lg:w-5/12 w-full"
        className="focus:border-secondary focus:border-[1px] transition-colors duration-500"
        label="Precio por mayor"
        name="priceMayor"
        required
        placeholder="Ingrese precio por mayor"
        onFocus={handleFocusInput}
        onChange={handleChangeInput}
        helpText={formikProduct.errors.priceMayor}
        value={`${formikProduct.values.priceMayor}`}
      />
      <AppInputText
        width="lg:w-5/12 w-full"
        className="focus:border-secondary focus:border-[1px] transition-colors duration-500"
        label="Precio por menor"
        name="priceMinor"
        required
        placeholder="Ingrese precio por menor"
        onFocus={handleFocusInput}
        onChange={handleChangeInput}
        helpText={formikProduct.errors.priceMinor}
        value={`${formikProduct.values.priceMinor}`}
      />
      <AppComboBox
        labelField="name"
        valueField="id"
        width="lg:w-5/12 w-full"
        items={categories}
        name="category_id"
        required
        placeholder="Seleccione una categoría"
        label="Categoría"
        onChange={(e: any) => {
          formikProduct.setFieldValue('category_id', e.value);
          formikProduct.setFieldValue('category', { id: e.value, name: e.label });
        }}
        onFocus={() => {
          formikProduct.setFieldError('category_id', '');
        }}
        helpText={formikProduct.errors.category_id}
        value={{ label: formikProduct.values.category.name, value: formikProduct.values.category.id }}
      />
      <AppComboBox
        labelField="name"
        valueField="id"
        width="lg:w-5/12 w-full"
        items={brands}
        name="brand_id"
        required
        placeholder="Seleccione una marca"
        label="Marca"
        onChange={(e: any) => {
          formikProduct.setFieldValue('brand_id', e.value);
          formikProduct.setFieldValue('brand', { id: e.value, name: e.label });
        }}
        onFocus={() => {
          formikProduct.setFieldError('brand_id', '');
        }}
        helpText={formikProduct.errors.brand_id}
        value={{ label: formikProduct.values.brand.name, value: formikProduct.values.brand.id }}
      />
      <AppComboBox
        labelField="name"
        valueField="id"
        width="lg:w-5/12 w-full"
        items={stores}
        name="store_id"
        required
        placeholder="Seleccione una tienda"
        label="Tienda"
        helpText={formikProduct.errors.store_id}
        onChange={(e: any) => {
          formikProduct.setFieldValue('store_id', e.value);
          formikProduct.setFieldValue('store', { id: e.value, name: e.label });
        }}
        onFocus={() => {
          formikProduct.setFieldError('store_id', '');
        }}
        value={{ label: formikProduct.values.store.name, value: formikProduct.values.store.id }}
      />
      <AppComboBox
        labelField="name"
        valueField="id"
        width="lg:w-5/12 w-full"
        items={units}
        name="unit_id"
        required
        placeholder="Seleccione una unidad"
        label="Unidad"
        helpText={formikProduct.errors.unit_id}
        onChange={(e: any) => {
          formikProduct.setFieldValue('unit_id', e.value);
          formikProduct.setFieldValue('unit', { id: e.value, name: e.label });
        }}
        onFocus={() => {
          formikProduct.setFieldError('unit_id', '');
        }}
        value={{ label: formikProduct.values.unit.name, value: formikProduct.values.unit.id }}
      />
      <AppInputText
        width="lg:w-10/12 w-full"
        className="focus:border-secondary focus:border-[1px] transition-colors duration-500"
        label="Foto"
        placeholder="Ingrese el enlace de la foto"
        name="photo"
        helpText={formikProduct.errors.photo}
        value={formikProduct.values.photo ? formikProduct.values.photo : ''}
        onFocus={handleFocusInput}
        onChange={handleChangeInput}
      />
      <div className="w-full flex justify-end">
        {createProduct && (
          <AppButton
            className="lg:w-3/12 w-full"
            disabled={sendingData}
            loading={!sendingData}
            type="submit"
            bgColor="bg-secondary"
          >
            <div className="flex gap-2">
              <PlusCircleIcon className="w-5 text-white" />
              <span className="text-white">Crear Producto</span>
            </div>
          </AppButton>
        )}
        {!createProduct && (
          <AppButton
            className="lg:w-3/12 w-full"
            disabled={sendingData}
            loading={!sendingData}
            type="submit"
            bgColor="bg-yellow-500"
          >
            <div className="flex gap-2">
              <PencilIcon className="w-5 text-black" />
              <span className="text-black">Editar Producto</span>
            </div>
          </AppButton>
        )}
      </div>
    </form>
  );
};

export default ProductoModal;
