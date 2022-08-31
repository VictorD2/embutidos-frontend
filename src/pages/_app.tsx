import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import NextNProgress from 'nextjs-progressbar';
import 'remixicon/fonts/remixicon.css';
import 'react-toastify/dist/ReactToastify.css';
import SplashLayout from '@layout/splash.layout';
import UserLayout from '@layout/user.layout';
import GuestLayout from '@layout/guest.layout';
import { AuthProvider } from '@contexts/auth.context';
import favicon from '../../public/logo_prospark.jpg';
import { ToastContainer } from 'react-toastify';
import AdminLayout from '@layout/admin.layout';
import '@styles/global.css';

const rutasPrivadas = ['/dashboard', '/dashboard/pedidos', '/dashboard/productos', '/dashboard/clientes'];
const rutasPublicas = ['/login'];

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // This is for layout
  const validarRutaPublica = (): boolean => {
    let vali = false;
    let rutasUrl = router.route.split('/');
    rutasPublicas.forEach(element =>
      JSON.stringify(element.split('/')) === JSON.stringify(rutasUrl) ? (vali = true) : null
    );
    return vali;
  };

  // This is for layout
  const validarRutaPrivada = (): boolean => {
    let vali = false;
    let rutasUrl = router.route.split('/');
    rutasPrivadas.forEach(element =>
      JSON.stringify(element.split('/')) === JSON.stringify(rutasUrl) ? (vali = true) : null
    );
    return vali;
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      if (rutasPublicas.includes(router.route)) router.push('/');
      setTimeout(() => setLoading(true), 2000);
      return;
    }
    if (!rutasPublicas.includes(router.route)) router.push('/');
    setTimeout(() => setLoading(true), 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.route]);

  return (
    <AuthProvider>
      <>
        {/* eslint-disable-next-line @next/next/no-script-in-head */}
        <Head>
          <title>
            {router.route === '/'
              ? 'PAGINA - INICIO'
              : router.route.replace('/', 'PAGINA - ').toUpperCase().replace('DASHBOARD/', '')}
          </title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <link rel="icon" type="image/png" href={favicon.src}></link>
        </Head>
        {loading ? (
          <>
            <NextNProgress showOnShallow={false} color="#63D7C4" />
            <ToastContainer />
            {validarRutaPublica() ? (
              <GuestLayout>
                <Component {...pageProps} />
              </GuestLayout>
            ) : validarRutaPrivada() ? (
              <AdminLayout>
                <Component {...pageProps} />
              </AdminLayout>
            ) : (
              <UserLayout>
                <Component {...pageProps} />
              </UserLayout>
            )}
          </>
        ) : (
          <SplashLayout />
        )}
      </>
    </AuthProvider>
  );
};

export default MyApp;
