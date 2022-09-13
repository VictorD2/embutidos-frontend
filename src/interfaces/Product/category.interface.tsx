export interface ICategory {
  id?: number;
  name: string;
}
export interface GetCategoriesResponse {
  success: string;
  categories: ICategory[];
}
