export interface IStore {
  id?: number;
  name: string;
}
export interface GetStoresResponse {
  success: string;
  stores: IStore[];
}
