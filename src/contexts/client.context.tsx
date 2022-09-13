import React, { useEffect, useState } from 'react';
import ClsClient from '@class/ClsClient';
import { IClient, IClientContext, initialStateIClient } from '@interfaces/client.interface';

export const ClientContext = React.createContext({} as IClientContext);

// eslint-disable-next-line no-undef
export const ClientProvider = ({ children }: { children: JSX.Element }) => {
  const [clients, setClients] = useState<IClient[]>([]);
  const [client, setClient] = useState<IClient>(initialStateIClient);
  const getClients = async () => {
    setClients(ClsClient.clients);
  };

  useEffect(() => {
    getClients();
    return () => {
      setClients([]);
    };
  }, []);

  return (
    <ClientContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        client,
        setClient,
        clients,
        setClients,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export function useClient() {
  const context = React.useContext(ClientContext);
  if (!context) throw new Error('useClient debe estar dentro del proveedor usuario context');
  return context;
}
