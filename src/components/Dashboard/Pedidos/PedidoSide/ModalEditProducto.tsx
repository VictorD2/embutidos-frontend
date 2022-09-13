import React from 'react';
import { PencilIcon } from '@heroicons/react/outline';
import { usePedidoSide } from '@contexts/pedidoSide.context';
import AppButton from '@shared/app_button';
import AppInputText from '@shared/app_input_text';

type InputEvent = React.ChangeEvent<HTMLInputElement>;
type FocusEvent = React.FocusEvent<HTMLInputElement>;
type FormEvent = React.FormEvent<HTMLFormElement>;

const ModalEditProducto = () => {
  const { formikProductEdit } = usePedidoSide();

  const handleChangeInput = (e: InputEvent) => {
    formikProductEdit.setFieldValue(e.target.name, e.target.value);
  };
  const handleFocusInput = (e: FocusEvent) => {
    formikProductEdit.setFieldError(e.target.name, '');
  };

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    formikProductEdit.submitForm();
  };

  return (
    <form onSubmit={handleSubmitForm} className="w-full h-full p-5 flex gap-3 flex-col">
      <AppInputText
        className="focus:border-secondary focus:border-[1px] transition-colors duration-500"
        label="Código"
        name="id"
        required
        disabled
        value={`${formikProductEdit.values.id}`}
      />

      <AppInputText
        className="focus:border-secondary focus:border-[1px] transition-colors duration-500"
        label="Nombre"
        name="name"
        required
        disabled
        value={formikProductEdit.values.name}
      />
      <AppInputText
        label="Cantidad"
        name="stock"
        placeholder="Ingrese la cantidad"
        type="number"
        helpText={formikProductEdit.errors.stock}
        value={`${formikProductEdit.values.stock}`}
        onFocus={handleFocusInput}
        onChange={handleChangeInput}
        required
      />
      <AppInputText
        className="focus:border-secondary focus:border-[1px] transition-colors duration-500"
        label="Precio"
        name="priceCost"
        required
        disabled
        value={`${formikProductEdit.values.priceCost * formikProductEdit.values.stock}`}
      />
      <div className="w-full flex justify-end">
        <AppButton type="submit" bgColor="bg-yellow-500">
          <div className="flex gap-2">
            <PencilIcon className="w-5 text-black" />
            <span className="text-black">Editar Producto</span>
          </div>
        </AppButton>
      </div>
    </form>
  );
};

export default ModalEditProducto;
