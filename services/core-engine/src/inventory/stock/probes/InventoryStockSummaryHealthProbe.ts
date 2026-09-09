export class InventoryStockSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryStockSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryStockSummary" };
  }
}
