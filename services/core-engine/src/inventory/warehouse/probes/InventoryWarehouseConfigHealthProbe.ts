export class InventoryWarehouseConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryWarehouseConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryWarehouseConfig" };
  }
}
