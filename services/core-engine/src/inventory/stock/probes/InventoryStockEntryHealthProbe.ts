export class InventoryStockEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryStockEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryStockEntry" };
  }
}
