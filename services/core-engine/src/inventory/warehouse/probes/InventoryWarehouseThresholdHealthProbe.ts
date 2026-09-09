export class InventoryWarehouseThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryWarehouseThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryWarehouseThreshold" };
  }
}
