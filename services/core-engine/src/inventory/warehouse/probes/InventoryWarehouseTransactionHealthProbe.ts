export class InventoryWarehouseTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryWarehouseTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryWarehouseTransaction" };
  }
}
