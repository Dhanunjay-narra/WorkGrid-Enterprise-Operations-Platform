export class InventoryStockMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryStockMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryStockMetric" };
  }
}
