import LoginPage from '@components/Login/LoginPage';
import { LoginProvider } from '@contexts/login.context';
import { NextPage } from 'next';
import React from 'react';

const Login: NextPage = () => {
  return (
    <LoginProvider>
      <LoginPage />
    </LoginProvider>
  );
};

export default Login;
