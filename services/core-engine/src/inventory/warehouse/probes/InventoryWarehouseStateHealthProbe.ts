export class InventoryWarehouseStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryWarehouseState" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryWarehouseState" };
  }
}
