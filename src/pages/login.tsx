import React from 'react';
import { NextPage } from 'next';
import LoginPage from '@components/Login/LoginPage';
import { LoginProvider } from '@contexts/login.context';

const Login: NextPage = () => {
  return (
    <LoginProvider>
      <LoginPage />
    </LoginProvider>
  );
};

export default Login;
