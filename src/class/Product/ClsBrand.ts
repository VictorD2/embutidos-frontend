import { getBrandsService } from '@services/Products/brand.service';

class ClsBrand {
  static async getBrands() {
    const res = await getBrandsService();
    return { brands: res.data.brands };
  }
}

export default ClsBrand;
