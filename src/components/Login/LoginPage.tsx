import useLogin from '@hooks/useLogin';
import { AppText } from '@shared/app_text';
import React from 'react';
import FormLogin from './FormLogin';
import FormRegister from './FormRegister';

const LoginPage = () => {
  const { isLogin, setIsLogin } = useLogin();

  return (
    <div className="w-full bg-[#214741] h-screen flex justify-center items-center">
      <div className="bg-gradient-to-r from-[#214741] to-[#63D7C4] w-full h-screen lg:py-20 lg:px-40 flex">
        <div className="flex w-full shadow-[10px_10px_45px_40px_rgba(0,0,0,0.2)] rounded-2xl">
          <div className="w-1/2 p-20 lg:block sm:hidden hidden bg-primary rounded-l-2xl"></div>
          <div className="lg:w-1/2 sm:w-full w-full lg:p-20 p-5 flex flex-col gap-5 bg-secondary lg:rounded-r-2xl">
            <div className="flex gap-2">
              <AppText
                onClick={() => {
                  setIsLogin(true);
                }}
                as="p"
                className="cursor-pointer"
                fontSize="text-lg"
                textColor={`${isLogin ? `text-primary` : `text-white`}`}
              >
                Iniciar Sesión
              </AppText>
              <AppText as="p" fontSize="text-lg" textColor={'text-white'}>
                o
              </AppText>
              <AppText
                onClick={() => {
                  setIsLogin(false);
                }}
                as="p"
                className="cursor-pointer"
                fontSize="text-lg"
                textColor={`${!isLogin ? `text-primary` : `text-white`}`}
              >
                Registrarse
              </AppText>
            </div>
            {isLogin && <FormLogin />}
            {!isLogin && <FormRegister />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
