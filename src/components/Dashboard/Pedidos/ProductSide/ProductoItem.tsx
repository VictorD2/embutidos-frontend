/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable comma-dangle */
/* eslint-disable arrow-parens */
import React from 'react';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { PlusCircleIcon } from '@heroicons/react/outline';
import { IProducto } from '@interfaces/producto.interface';
import AppButton from '@shared/app_button';
import AppText from '@shared/app_text';
import AppInputText from '@shared/app_input_text';
import { usePedido } from '@contexts/pedidos.context';
import { useProducto } from '@contexts/products.context';
import { productAddSchema } from '@src/schemas/pedido.schema';

type ProductoItemProps = {
  producto: IProducto;
};
type InputEvent = React.ChangeEvent<HTMLInputElement>;
type ClickEvent = React.MouseEvent<HTMLDivElement>;

const ProductoItem = ({ producto }: ProductoItemProps) => {
  const { setPhotoModal, setOpenModal } = useProducto();
  const { productosPedido, setProductosPedido } = usePedido();

  const formikQuantity = useFormik({
    validationSchema: Yup.object(productAddSchema),
    initialValues: { quantity: producto.quantity },
    initialErrors: { quantity: '' },
    onSubmit: formValues => {
      let finded = true;
      setProductosPedido(
        productosPedido.map(item => {
          if (item.id === producto.id) {
            finded = false;
            return { ...item, quantity: item.quantity + formValues.quantity };
          }
          return item;
        })
      );
      if (finded) {
        const newProduct: IProducto = {
          id: producto.id,
          name: producto.name,
          photo: producto.photo,
          price: producto.price,
          quantity: formValues.quantity,
        };
        setProductosPedido([...productosPedido, newProduct]);
      }
    },
  });

  const handleChangeQuantity = (e: InputEvent) => {
    formikQuantity.setFieldValue('quantity', parseInt(`${e.target.value}`, 10));
  };

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const handleClickImage = (e: ClickEvent) => {
    setPhotoModal(producto.photo);
    setOpenModal(true);
  };

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const handleClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (formikQuantity.values.quantity <= 0) {
      return toast.warning('Ingrese una cantidad', { autoClose: 2000, closeButton: true, draggable: true });
    }
    return formikQuantity.submitForm();
  };

  return (
    <div className="w-full h-32 rounded-lg bg-white flex border-gray-500 border-2">
      {/* Photo */}
      <div onClick={handleClickImage} className="lg:w-2/12 md:w-4/12 w-4/12 lg:h-full md:h-full h-full p-4">
        <img className="w-full h-full object-cover" src={producto.photo} alt={producto.name} />
      </div>
      {/* Data */}
      <div className="w-10/12 h-full">
        {/* Container */}
        <div className="flex h-full w-full flex-wrap">
          {/* Name Product */}
          <div className="h-[55%] w-2/3 pt-4 overflow-hidden ">
            <AppText
              as="span"
              className="font-bold overflow-hidden"
              fontSize="text-md"
              textColor="text-gray-800 hover:text-secondary transition-all duration-500"
            >
              {`${producto.id} - ${producto.name}`}
            </AppText>
          </div>
          {/* Quantity */}
          <div className="h-3/6 w-1/3 flex gap-4 pt-2 justify-center ">
            <AppInputText
              className="border-gray-400 border-2 mt-1 text-center outline-none appearance-none"
              width="lg:w-28 md:w-12 w-12"
              height="h-8"
              padding="px-1"
              type="number"
              helpColor="hidden"
              helpText={formikQuantity.errors.quantity}
              value={`${formikQuantity.values.quantity}`}
              name={`quantity${producto.id}`}
              label="Cantidad:"
              labelWidth="lg:block hidden"
              direction="flex lg:flex-row md:flex-col lg:gap-2"
              onChange={handleChangeQuantity}
            />
          </div>
          {/* Price */}
          <div className="h-3/6 w-2/3 flex justify-start items-center">
            <AppText
              as="span"
              className="font-bold overflow-hidden"
              fontSize="text-md"
              textColor="text-gray-500 hover:text-secondary transition-all duration-500"
            >
              {`S/.${producto.price}`}
            </AppText>
          </div>
          {/* Button Add */}
          <div className="h-3/6 w-1/3 flex justify-center items-center">
            <AppButton
              bgColor={`${formikQuantity.values.quantity <= 0 ? 'bg-green-500 opacity-70' : 'bg-green-600'}`}
              className="mb-4"
              height="w-full rounded-2xl flex gap-1 justify-center items-center h-8"
              onClick={handleClickButton}
              // disabled={parseInt(quantity) === 0}
            >
              <span className="lg:block md:hidden hidden">Agregar</span>
              <PlusCircleIcon className="w-[25px]" />
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductoItem;
