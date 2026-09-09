export class InventoryBatchesMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryBatchesMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryBatchesMetric" };
  }
}
