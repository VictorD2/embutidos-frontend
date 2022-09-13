import { getCategoryService } from '@services/Products/category.service';

class ClsCategory {
  static async getCategories() {
    const res = await getCategoryService();
    return { categories: res.data.categories };
  }
}

export default ClsCategory;
