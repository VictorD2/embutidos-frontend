import { Dispatch } from 'react';

export interface IClient {
  id?: number;
  email: string;
  name: string;
  address: string;
  ruc: string;
  phone: string;
}
export interface IClientContext {
  clients: IClient[];
  setClients: Dispatch<IClient[]>;
  client: IClient;
  setClient: Dispatch<IClient>;
}

export const initialStateIClient: IClient = {
  email: '',
  name: '',
  address: '',
  ruc: '',
  phone: '',
};
