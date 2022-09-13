export interface IUnit {
  id?: number;
  name: string;
}
export interface GetUnitsResponse {
  success: string;
  units: IUnit[];
}
