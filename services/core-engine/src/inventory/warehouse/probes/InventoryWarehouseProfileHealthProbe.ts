export class InventoryWarehouseProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryWarehouseProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryWarehouseProfile" };
  }
}
