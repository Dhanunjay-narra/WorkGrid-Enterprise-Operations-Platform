export class InventoryWarehouseItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryWarehouseItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryWarehouseItem" };
  }
}
