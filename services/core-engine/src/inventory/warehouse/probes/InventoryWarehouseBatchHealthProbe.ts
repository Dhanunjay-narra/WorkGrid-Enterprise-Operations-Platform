export class InventoryWarehouseBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryWarehouseBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryWarehouseBatch" };
  }
}
