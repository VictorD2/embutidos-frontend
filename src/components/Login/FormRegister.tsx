import useLogin from '@hooks/useLogin';
import { AppButton } from '@shared/app_button';
import { AppInputText } from '@shared/app_input_text';
import React from 'react';

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
type FocusEvent = React.FocusEvent<HTMLInputElement>;

const FormRegister = () => {
  const { formikRegister } = useLogin();

  const handleChangeInput = (e: ChangeEvent) => {
    formikRegister.setFieldValue(e.target.name, e.target.value);
  };

  const handleFocusInput = (e: FocusEvent) => {
    formikRegister.setFieldError(e.target.name, '');
  };
  return (
    <>
      <AppInputText
        labelColor="text-white"
        className="focus:border-b-primary focus:border-b-2 bg-transparent border-b-white border-b-2 text-white"
        label="Correo Electrónico"
        onChange={handleChangeInput}
        onFocus={handleFocusInput}
        name="email"
        helpColor="text-red-600"
        placeholder="Ingrese su correo electrónico"
        helpText={formikRegister.errors.email}
        value={formikRegister.values.email}
      />
      <AppInputText
        className="focus:border-b-primary focus:border-b-2 bg-transparent border-b-white border-b-2 text-white"
        labelColor="text-white"
        label="Contraseña"
        onChange={handleChangeInput}
        onFocus={handleFocusInput}
        name="password"
        helpColor="text-red-600"
        placeholder="Ingrese su contraseña"
        helpText={formikRegister.errors.password}
        value={formikRegister.values.password}
      />
      <AppInputText
        className="focus:border-b-primary focus:border-b-2 bg-transparent border-b-white border-b-2 text-white"
        labelColor="text-white"
        label="Nombre"
        onChange={handleChangeInput}
        onFocus={handleFocusInput}
        name="name"
        helpColor="text-red-600"
        placeholder="Ingrese su Nombre"
        helpText={formikRegister.errors.name}
        value={formikRegister.values.name}
      />
      <AppInputText
        className="focus:border-b-primary focus:border-b-2 bg-transparent border-b-white border-b-2 text-white"
        labelColor="text-white"
        label="Apellido"
        onChange={handleChangeInput}
        onFocus={handleFocusInput}
        name="lastname"
        helpColor="text-red-600"
        placeholder="Ingrese su Apellido"
        helpText={formikRegister.errors.lastname}
        value={formikRegister.values.lastname}
      />
      <AppButton
        className="mt-5 rounded-xl"
        onClick={() => {
          formikRegister.submitForm();
        }}
      >
        Registrarme
      </AppButton>
    </>
  );
};

export default FormRegister;
