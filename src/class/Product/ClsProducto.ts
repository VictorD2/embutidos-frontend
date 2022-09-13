import { IProducto, Opts } from '@interfaces/Product/producto.interface';
import { getProductsService, createProductService, editProductService } from '@services/Products/productos.service';

class ClsProducto {
  static async getProducts(opts: Opts) {
    const res = await getProductsService(opts);
    return { products: res.data.products, quantity: res.data.quantity };
  }

  static async createProduct(product: IProducto) {
    const res = await createProductService(product);
    return { message: res.data.success, product: res.data.product };
  }

  static async editProduct(product: IProducto) {
    const res = await editProductService(product);
    return { message: res.data.success, product: res.data.product };
  }
}

export default ClsProducto;
