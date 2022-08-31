import { IClient } from '@interfaces/client.interface';
import clientes from './client.json';
class ClsClient {
  static clients: IClient[] = clientes.clientes;

  static async getClients(name: string | number): Promise<IClient[]> {
    const clients = [];
    for (let index = 0; index < ClsClient.clients.length; index++) {
      const element = ClsClient.clients[index];
      if (element.name === name || element.id === name) clients.push(element);
    }
    return clients;
  }
}
export default ClsClient;
