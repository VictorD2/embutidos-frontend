/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import moment from 'moment';
import { toast } from 'react-toastify';
import { PencilIcon, TrashIcon, SearchIcon, CheckCircleIcon } from '@heroicons/react/outline';
import AppInputText from '@shared/app_input_text';
import AppText from '@shared/app_text';
import { useClient } from '@contexts/client.context';
import AppTable from '@shared/app_table';
import { usePedido } from '@contexts/pedidos.context';
import AppButton from '@shared/app_button';
import AppModal from '@shared/app_modal';
import ModalEditProducto from '@components/Dashboard/Pedidos/PedidoSide/ModalEditProducto';
import { usePedidoSide } from '@contexts/pedidoSide.context';
import { IProducto } from '@interfaces/producto.interface';
import AppConfirm from '@shared/app_confirm';

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const TABLE_LABELS = ['Código', 'Producto', 'Cant', 'Precio', 'Opciones'];

const PedidoSide = () => {
  const [search, setSearch] = useState('');
  const [openConfirm, setOpenConfirm] = useState<boolean>(false);
  const { productosPedido, total } = usePedido();
  const { openModalEdit, setOpenModalEdit, formikProductEdit, deleteFromList } = usePedidoSide();
  const { client } = useClient();

  const handleSubmitPedido = () => {
    if (productosPedido.length === 0) {
      toast.warning('No hay productos en la lista', {
        autoClose: 2000,
        closeButton: true,
        draggable: true,
      });
    }
  };

  // Input Searcg
  const handleSearchChange = (e: InputEvent) => {
    setSearch(e.target.value);
  };

  // Button edit in table
  const handleEditButton = (product: IProducto) => {
    formikProductEdit.setFieldValue('id', product.id);
    formikProductEdit.setFieldValue('name', product.name);
    formikProductEdit.setFieldValue('price', product.price);
    formikProductEdit.setFieldValue('quantity', product.quantity);
    setOpenModalEdit(true);
  };

  // Button trash in table
  const handleTrashButton = (product: IProducto) => {
    formikProductEdit.setFieldValue('id', product.id);
    formikProductEdit.setFieldValue('name', product.name);
    formikProductEdit.setFieldValue('price', product.price);
    formikProductEdit.setFieldValue('quantity', product.quantity);
    setOpenConfirm(true);
  };

  // Button xIcon in modal
  const handleCloseModal = () => {
    setOpenModalEdit(false);
  };

  const columns = TABLE_LABELS.map((item, i) => {
    let style = 'bg-background border-x-2 border-x-gray-500 border-b-2 border-b-gray-500';
    if (i === 0) style = 'bg-background border-r-2 border-r-gray-500 border-b-2 border-b-gray-500';
    if (i === TABLE_LABELS.length - 1) {
      style = 'bg-background border-l-2 border-l-gray-500 border-b-2 border-b-gray-500';
    }
    return (
      <th className={style} key={item}>
        {item}
      </th>
    );
  });

  // eslint-disable-next-line arrow-parens
  const rows = productosPedido.map(item => {
    return (
      <tr key={item.id}>
        <td className="bg-background border-r-2 border-r-gray-500 px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
          {item.id}
        </td>
        <td className="bg-background border-r-2 border-r-gray-500 px-6 py-2 lg:whitespace-nowrap text-sm font-medium text-gray-900">
          {item.name}
        </td>
        <td className="bg-background border-r-2 border-r-gray-500 px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
          {item.quantity}
        </td>
        <td className="bg-background border-r-2 border-r-gray-500 px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
          {parseFloat(`${item.price * item.quantity}`).toFixed(2)}
        </td>
        <td className="bg-background border-0 px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
          <div className="w-full h-full flex justify-around gap-2">
            <AppButton
              height="h-5"
              padding="p-1"
              className=""
              bgColor="bg-yellow-400"
              onClick={() => {
                handleEditButton(item);
              }}
            >
              <PencilIcon className="w-4" />
            </AppButton>
            <AppButton
              height="h-5"
              padding="p-1"
              className=""
              bgColor="bg-red-400"
              onClick={() => {
                handleTrashButton(item);
              }}
            >
              <TrashIcon className="w-4" />
            </AppButton>
          </div>
        </td>
      </tr>
    );
  });

  return (
    <div className="h-full lg:w-1/2 md:w-1/2 w-full flex justify-start pr-2 gap-5 flex-col items-center">
      <AppText as="h3" className="font-bold">
        PEDIDO
      </AppText>
      {/* Search Client */}
      <div className="w-8/12 relative">
        <AppInputText
          borderColor="border-black border-2"
          className="rounded-3xl focus:shadow-secondary focus:shadow-md transition-all duration-300"
          width="w-full"
          placeholder="Buscar cliente"
          value={search}
          name="searchClient"
          onChange={handleSearchChange}
        />
        <SearchIcon className="w-5 h-5 absolute right-5 top-3" />
        {/* <div className="absolute w-full h-16 bottom-[-4rem] bg-red-500"></div> */}
      </div>

      {/* Pedido details */}
      <div className="rounded-lg w-full h-full border-gray-500 border-2">
        {/* Header Pedido */}
        <div className="w-full h-10 flex justify-between px-5 items-center">
          <AppText className="font-bold" as="span">
            Nº Pedido: 9320
          </AppText>
          <AppText className="flex gap-2" textColor="text-gray-500" as="span">
            <span className="text-black font-bold">Fecha:</span>
            {moment().format('DD/MM/YYYY')}
          </AppText>
        </div>
        {/* Client data */}
        <div className="w-full h-32 flex flex-col px-7 py-3">
          <AppText textColor="text-gray-500" as="span">
            <span className="font-bold text-black">Nombre:</span>
            {client.name}
          </AppText>
          <AppText textColor="text-gray-500" as="span">
            <span className="font-bold text-black">DNI:</span>
            {client.ruc}
          </AppText>
          <AppText textColor="text-gray-500" as="span">
            <span className="font-bold text-black">Celular:</span>
            {client.phone}
          </AppText>
          <div className="mt-4 border-t-2 border-t-black" />
        </div>

        {/* Product's list */}
        <div className="lg:min-h-[calc(50vh-4rem)] md:min-h-[calc(50vh-4rem)] min-h-[calc(50vh-4rem)] lg:max-h-[24rem] md:max-h-[24rem] max-h-[8rem] px-4 flex flex-col justify-between gap-2 overflow-y-auto scrollbar-thin scrollbar-thumb-secondary scrollbar-track-transparent">
          <AppTable
            emptyMessage="No hay productos registrados"
            columns={columns}
            rows={rows}
            count={productosPedido.length}
            loading
          />
        </div>
        {/* Total */}
        <div className="w-100 h-20 flex justify-end items-end px-12 py-5 gap-4">
          <span className="font-bold">Total</span>
          <span>{`S/. ${parseFloat(`${total}`).toFixed(2)}`}</span>
        </div>
        {/* Modal Edit */}
        <AppModal
          headerBgColor="bg-gradient-to-r from-yellow-500 to-yellow-300"
          headerColor="text-black"
          IconHeader={PencilIcon}
          headerText="Editar producto"
          open={openModalEdit}
          onClose={handleCloseModal}
        >
          <ModalEditProducto />
        </AppModal>

        {/* Delete confirm */}
        <AppConfirm
          setOpen={setOpenConfirm}
          open={openConfirm}
          onConfirm={() => {
            deleteFromList();
          }}
          message="¿Seguro que desea eliminar este producto de la lista?"
        />
      </div>
      <div className="w-full flex justify-end">
        <AppButton
          bgColor={productosPedido.length === 0 ? 'bg-green-500 opacity-70' : 'bg-green-600'}
          onClick={handleSubmitPedido}
        >
          <div className="flex gap-2">
            <CheckCircleIcon className="w-5" />
            <span>Realizar Pedido</span>
          </div>
        </AppButton>
      </div>
    </div>
  );
};

export default PedidoSide;
