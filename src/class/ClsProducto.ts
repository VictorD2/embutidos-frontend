import { IProducto } from '@interfaces/producto.interface';
import jsonProductos from './productos.json';
class ClsProducto {
  static productos: IProducto[] = jsonProductos.productos;
}

export default ClsProducto;
