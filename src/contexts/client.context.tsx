import ClsClient from '@class/ClsClient';
import { IClient, IClientContext, initialStateIClient } from '@interfaces/client.interface';
import React, { useEffect, useState } from 'react';

export const ClientContext = React.createContext({} as IClientContext);

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
