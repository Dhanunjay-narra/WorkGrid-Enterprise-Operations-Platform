export class InventoryStockNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryStockNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryStockNode" };
  }
}
