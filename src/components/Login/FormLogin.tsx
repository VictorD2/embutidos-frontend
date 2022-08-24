import useLogin from '@hooks/useLogin';
import { AppButton } from '@shared/app_button';
import { AppInputText } from '@shared/app_input_text';
import React from 'react';

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
type FocusEvent = React.FocusEvent<HTMLInputElement>;

const FormLogin = () => {
  const { formikLogin } = useLogin();

  const handleChangeInput = (e: ChangeEvent) => {
    formikLogin.setFieldValue(e.target.name, e.target.value);
  };

  const handleFocusInput = (e: FocusEvent) => {
    formikLogin.setFieldError(e.target.name, '');
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
        helpText={formikLogin.errors.email}
        value={formikLogin.values.email}
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
        helpText={formikLogin.errors.password}
        value={formikLogin.values.password}
      />
      <AppButton
        className="mt-5 rounded-xl"
        onClick={() => {
          formikLogin.submitForm();
        }}
      >
        Entrar
      </AppButton>
    </>
  );
};

export default FormLogin;
