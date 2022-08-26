import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { IAuthContext, initialStateUser, IUser } from '@interfaces/auth.interface';
import jwtDecode from 'jwt-decode';

const rutesPublicas = ['/login', '/', '/catalogo', '/nosotros'];

export const AuthContext = React.createContext({} as IAuthContext);

// eslint-disable-next-line no-undef
export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<IUser>(initialStateUser);
  const router = useRouter();

  const cargarUsuario = async () => {
    try {
      const token = localStorage.getItem('token'); //getting token
      if (token) {
        const usuario = jwtDecode<IUser>(token);
        // const secondsSinceEpoch = Math.round(Date.now() / 1000);

        //checking for time expiration of the token
        // if (secondsSinceEpoch > parseInt(usuario.exp + '')) {
        //   localStorage.removeItem('token');
        //   router.push('/');
        //   return;
        // }
        setUser(usuario);
        return;
      }
      if (rutesPublicas.includes(router.route)) return setUser(initialStateUser);
      setUser(initialStateUser);
      router.push('/');
    } catch (error) {
      router.push('/');
      console.log(error);
      setUser(initialStateUser);
    }
  };

  useEffect(() => {
    cargarUsuario();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
