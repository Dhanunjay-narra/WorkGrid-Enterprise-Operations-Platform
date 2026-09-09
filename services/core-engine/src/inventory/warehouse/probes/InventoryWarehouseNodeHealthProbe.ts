export class InventoryWarehouseNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryWarehouseNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryWarehouseNode" };
  }
}
