import useLogin from '@hooks/useLogin';
import { AppButton } from '@shared/app_button';
import { AppInputText } from '@shared/app_input_text';
import React from 'react';

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
type FocusEvent = React.FocusEvent<HTMLInputElement>;
type SubmitEvent = React.FormEvent<HTMLFormElement>;

const FormLogin = () => {
  const { formikLogin, loading } = useLogin();

  const handleChangeInput = (e: ChangeEvent) => {
    formikLogin.setFieldValue(e.target.name, e.target.value);
  };

  const handleFocusInput = (e: FocusEvent) => {
    formikLogin.setFieldError(e.target.name, '');
  };

  const handleFormSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    formikLogin.submitForm();
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
      <AppInputText
        labelColor="text-white"
        className="focus:border-b-primary focus:border-b-2 border-b-white border-b-2 text-white"
        label="Correo Electrónico o DNI"
        onChange={handleChangeInput}
        onFocus={handleFocusInput}
        bgColor="bg-transparent"
        name="email"
        required
        helpColor="text-red-600"
        placeholder="Ingrese su correo electrónico"
        helpText={formikLogin.errors.email}
        value={formikLogin.values.email}
      />
      <AppInputText
        className="focus:border-b-primary focus:border-b-2 border-b-white border-b-2 text-white"
        labelColor="text-white"
        label="Contraseña"
        onChange={handleChangeInput}
        onFocus={handleFocusInput}
        name="password"
        type="password"
        required
        passwordEyeColor="text-white"
        bgColor="bg-transparent"
        helpColor="text-red-600"
        placeholder="Ingrese su contraseña"
        passwordEye
        helpText={formikLogin.errors.password}
        value={formikLogin.values.password}
      />
      <AppButton loading={!loading} disabled={loading} className="mt-5 rounded-xl" type="submit" onClick={() => {}}>
        Entrar
      </AppButton>
    </form>
  );
};

export default FormLogin;
