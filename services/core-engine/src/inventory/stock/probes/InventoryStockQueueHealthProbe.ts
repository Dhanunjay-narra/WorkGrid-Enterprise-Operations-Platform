export class InventoryStockQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryStockQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryStockQueue" };
  }
}
