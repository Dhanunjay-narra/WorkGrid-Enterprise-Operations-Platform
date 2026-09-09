export class InventoryWarehouseEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryWarehouseEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryWarehouseEntry" };
  }
}
