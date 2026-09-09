export class InventorySuppliersMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventorySuppliersMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventorySuppliersMetric" };
  }
}
