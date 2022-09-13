import { IProducto } from '@interfaces/Product/producto.interface';
import jsonProductos from './productos.json';

class ClsPedido {
  static productos: IProducto[] = jsonProductos.productos;
}
export default ClsPedido;
