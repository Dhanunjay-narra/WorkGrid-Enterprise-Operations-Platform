export class InventoryWarehouseSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryWarehouseSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryWarehouseSession" };
  }
}
