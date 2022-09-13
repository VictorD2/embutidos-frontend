import { getUnitService } from '@services/Products/unit.service';

class ClsUnit {
  static async getUnits() {
    const res = await getUnitService();
    return { units: res.data.units };
  }
}

export default ClsUnit;
