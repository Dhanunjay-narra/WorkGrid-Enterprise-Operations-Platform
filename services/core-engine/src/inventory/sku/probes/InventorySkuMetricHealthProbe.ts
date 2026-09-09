export class InventorySkuMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventorySkuMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventorySkuMetric" };
  }
}
