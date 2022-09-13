import { getStoresService } from '@services/Products/store.service';

class ClsStore {
  static async getStores() {
    const res = await getStoresService();
    return { stores: res.data.stores };
  }
}

export default ClsStore;
