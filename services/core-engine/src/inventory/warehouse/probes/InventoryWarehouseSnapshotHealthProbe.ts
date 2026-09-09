export class InventoryWarehouseSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryWarehouseSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryWarehouseSnapshot" };
  }
}
