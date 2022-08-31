import { IProducto } from '@interfaces/producto.interface';
import { getProductsService } from '@services/productos.service';
import jsonProductos from './productos.json';
class ClsProducto {
  static productos: IProducto[] = jsonProductos.productos;

  static async getProducts() {
    const res = await getProductsService();
    this.productos = res.data.products;
    return res.data.products;
  }
}

export default ClsProducto;
