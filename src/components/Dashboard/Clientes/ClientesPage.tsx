import React from 'react';
import AppBreadCrumb from '@shared/app_breadcrums';
import AppButton from '@shared/app_button';
import AppControls from '@shared/app_controls';
import AppInputText from '@shared/app_input_text';
import AppTable from '@shared/app_table';

const ClientesPage = () => {
  return (
    <>
      {/* BreadCrums */}
      <AppBreadCrumb routes={[{ name: 'Clientes', link: '/dashboard/clientes' }]} />
      {/* PageName */}
      <div className="mt-3 font-bold text-2xl capitalize hover:text-primary transition-all duration-500">Clientes</div>

      <AppControls>
        <AppInputText
          width="lg:w-1/3"
          placeholder="Search here..."
          className="focus:border-1 focus:border-secondary"
          name=""
          value=""
        />
        <AppButton
          type="button"
          bgColor="bg-secondary"
          onClick={() => {
            // resetEmotion();
            // setOpenModal(true);
          }}
        >
          Agregar Cliente
        </AppButton>
      </AppControls>
      <div className="bg-white rounded-lg shadow-lg mt-4">
        <AppTable loading emptyMessage="No hay clientes registrados aún" columns={[]} rows={[]} count={0} />
      </div>
    </>
  );
};

export default ClientesPage;
