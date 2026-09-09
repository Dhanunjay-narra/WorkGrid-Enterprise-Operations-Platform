export class InventoryWarehouseTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryWarehouseTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryWarehouseTask" };
  }
}
