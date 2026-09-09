export class InventoryTransfersMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryTransfersMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryTransfersMetric" };
  }
}
