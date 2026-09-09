export class InventoryWarehouseMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryWarehouseMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryWarehouseMetric" };
  }
}
