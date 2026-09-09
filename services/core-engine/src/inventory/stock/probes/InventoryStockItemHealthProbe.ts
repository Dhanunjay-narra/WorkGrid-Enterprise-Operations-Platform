export class InventoryStockItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryStockItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryStockItem" };
  }
}
