import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import jwtDecode from 'jwt-decode';
import { IAuthContext, initialStateUser, IUser } from '@interfaces/auth.interface';

const rutesPublicas = ['/login', '/', '/catalogo', '/nosotros'];

export const AuthContext = React.createContext({} as IAuthContext);

// eslint-disable-next-line no-undef
export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<IUser>(initialStateUser);
  const router = useRouter();

  const cargarUsuario = async () => {
    try {
      const token = localStorage.getItem('token'); // getting token
      if (token) {
        const usuario = jwtDecode<IUser>(token);
        if (router.pathname.includes('/dashboard') && usuario.rol.name !== 'Administrador') {
          setUser(usuario);
          return router.push('/');
        }
        // const secondsSinceEpoch = Math.round(Date.now() / 1000);

        // checking for time expiration of the token
        // if (secondsSinceEpoch > parseInt(usuario.exp + '')) {
        //   localStorage.removeItem('token');
        //   router.push('/');
        //   return;
        // }

        return setUser(usuario);
      }
      if (rutesPublicas.includes(router.route)) return setUser(initialStateUser);
      setUser(initialStateUser);
      return router.push('/');
    } catch (error) {
      router.push('/');
      console.log(error);
      return setUser(initialStateUser);
    }
  };

  useEffect(() => {
    cargarUsuario();
  }, []);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) throw new Error('useUsuario debe estar dentro del proveedor usuario context');
  return context;
}
