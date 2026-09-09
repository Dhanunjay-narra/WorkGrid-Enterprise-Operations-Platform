export interface WarehouseLocationBin {
  warehouseId: string;
  zone: string;
  binCode: string;
  capacityUnits: number;
  currentUnits: number;
}

export class WarehouseAllocationEngine {
  public findOptimalBin(bins: WarehouseLocationBin[], incomingUnits: number): WarehouseLocationBin | null {
    const eligible = bins
      .filter(b => (b.capacityUnits - b.currentUnits) >= incomingUnits)
      .sort((a, b) => (b.capacityUnits - b.currentUnits) - (a.capacityUnits - a.currentUnits));

    return eligible[0] || null;
  }
}
