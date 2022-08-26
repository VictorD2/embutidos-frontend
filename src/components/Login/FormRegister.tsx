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
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-1">
      <AppInputText
        className="focus:border-b-primary focus:border-b-2 border-b-white border-b-2 text-white"
        labelColor="text-white"
        bgColor="bg-transparent"
        label="Nombre Completo"
        onChange={handleChangeInput}
        onFocus={handleFocusInput}
        name="name"
        required
        helpColor="text-red-600"
        placeholder="Ingrese su Nombre Completo"
        helpText={formikRegister.errors.name}
        value={formikRegister.values.name}
      />
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
      <div className='flex justify-between gap-7'>
        <AppInputText
          className="focus:border-b-primary focus:border-b-2 border-b-white border-b-2 text-white"
          labelColor="text-white"
          bgColor="bg-transparent"
          label="Contraseña"
          width='w-1/2'
          onChange={handleChangeInput}
          onFocus={handleFocusInput}
          name="password"
          type="password"
          
          required
          passwordEyeColor="text-white"
          helpColor="text-red-600"
          placeholder="Contraseña"
          helpText={formikRegister.errors.password}
          value={formikRegister.values.password}
        />
        <AppInputText
          className="focus:border-b-primary focus:border-b-2 border-b-white border-b-2 text-white"
          labelColor="text-white"
          bgColor="bg-transparent"
          label="Repita su Contraseña"
          onChange={handleChangeInput}
          onFocus={handleFocusInput}
          name="repeatPassword"
          type="password"
          width='w-1/2'
          required
          passwordEyeColor="text-white"
          helpColor="text-red-600"
          placeholder="Repita su contraseña"
          helpText={formikRegister.errors.repeatPassword}
          value={formikRegister.values.repeatPassword}
        />
      </div>

      <AppInputText
        className="focus:border-b-primary focus:border-b-2 border-b-white border-b-2 text-white"
        labelColor="text-white"
        bgColor="bg-transparent"
        label="RUC o DNI"
        required
        onChange={handleChangeInput}
        onFocus={handleFocusInput}
        name="ruc"
        helpColor="text-red-600"
        placeholder="Ingrese su RUC o DNI"
        helpText={formikRegister.errors.ruc}
        value={formikRegister.values.ruc}
      />
      <AppInputText
        className="focus:border-b-primary focus:border-b-2 border-b-white border-b-2 text-white"
        labelColor="text-white"
        bgColor="bg-transparent"
        label="Dirección"
        onChange={handleChangeInput}
        onFocus={handleFocusInput}
        name="address"
        helpColor="text-red-600"
        placeholder="Ingrese su Dirección"
        helpText={formikRegister.errors.address}
        value={formikRegister.values.address}
      />
      <AppInputText
        className="focus:border-b-primary focus:border-b-2 border-b-white border-b-2 text-white"
        labelColor="text-white"
        bgColor="bg-transparent"
        label="Teléfono"
        onChange={handleChangeInput}
        onFocus={handleFocusInput}
        name="phone"
        helpColor="text-red-600"
        placeholder="Ingrese su telefono"
        helpText={formikRegister.errors.phone}
        value={formikRegister.values.phone}
      />

      <AppButton loading={!loading} disabled={loading} className="mt-5 rounded-xl" type="submit" onClick={() => { }}>
        Registrarme
      </AppButton>
    </form>
  );
};

export default FormRegister;
