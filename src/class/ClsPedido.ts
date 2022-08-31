import { IProducto } from '@interfaces/producto.interface';
import jsonProductos from './productos.json';

class ClsPedido {
  static productos: IProducto[] = jsonProductos.productos;
}
export default ClsPedido;
