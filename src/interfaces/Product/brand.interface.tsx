export interface IBrand {
  id?: number;
  name: string;
}
export interface GetBrandsResponse {
  success: string;
  brands: IBrand[];
}
