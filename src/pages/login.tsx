import React from 'react';
import { NextPage } from 'next';
import { LoginProvider } from '@contexts/login.context';
import LoginPage from '@components/Login/LoginPage';

const Login: NextPage = () => {
  return (
    <LoginProvider>
      <LoginPage />
    </LoginProvider>
  );
};

export default Login;
