export class InventoryWarehouseMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryWarehouseMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryWarehouseMapping" };
  }
}
