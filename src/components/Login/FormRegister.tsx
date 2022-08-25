import useLogin from '@hooks/useLogin';
import { AppButton } from '@shared/app_button';
import { AppInputText } from '@shared/app_input_text';
import React from 'react';

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
type FocusEvent = React.FocusEvent<HTMLInputElement>;
type SubmitEvent = React.FormEvent<HTMLFormElement>;

const FormRegister = () => {
  const { formikRegister, loading } = useLogin();

  const handleChangeInput = (e: ChangeEvent) => {
    formikRegister.setFieldValue(e.target.name, e.target.value);
  };

  const handleFocusInput = (e: FocusEvent) => {
    formikRegister.setFieldError(e.target.name, '');
  };

  const handleFormSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    formikRegister.submitForm();
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
      <AppInputText
        labelColor="text-white"
        className="focus:border-b-primary focus:border-b-2 border-b-white border-b-2 text-white"
        label="Correo Electrónico"
        bgColor="bg-transparent"
        onChange={handleChangeInput}
        onFocus={handleFocusInput}
        name="email"
        required
        helpColor="text-red-600"
        placeholder="Ingrese su correo electrónico"
        helpText={formikRegister.errors.email}
        value={formikRegister.values.email}
      />
      <AppInputText
        className="focus:border-b-primary focus:border-b-2 border-b-white border-b-2 text-white"
        labelColor="text-white"
        bgColor="bg-transparent"
        label="Contraseña"
        onChange={handleChangeInput}
        onFocus={handleFocusInput}
        name="password"
        type="password"
        passwordEye
        required
        passwordEyeColor="text-white"
        helpColor="text-red-600"
        placeholder="Ingrese su contraseña"
        helpText={formikRegister.errors.password}
        value={formikRegister.values.password}
      />
      <AppInputText
        className="focus:border-b-primary focus:border-b-2 border-b-white border-b-2 text-white"
        labelColor="text-white"
        bgColor="bg-transparent"
        label="Nombre"
        onChange={handleChangeInput}
        onFocus={handleFocusInput}
        name="name"
        required
        helpColor="text-red-600"
        placeholder="Ingrese su Nombre"
        helpText={formikRegister.errors.name}
        value={formikRegister.values.name}
      />
      <AppInputText
        className="focus:border-b-primary focus:border-b-2  border-b-white border-b-2 text-white"
        labelColor="text-white"
        label="Apellido"
        required
        bgColor="bg-transparent"
        onChange={handleChangeInput}
        onFocus={handleFocusInput}
        name="lastname"
        helpColor="text-red-600"
        placeholder="Ingrese su Apellido"
        helpText={formikRegister.errors.lastname}
        value={formikRegister.values.lastname}
      />
      <AppButton loading={!loading} disabled={loading} className="mt-5 rounded-xl" type="submit" onClick={() => {}}>
        Registrarme
      </AppButton>
    </form>
  );
};

export default FormRegister;
