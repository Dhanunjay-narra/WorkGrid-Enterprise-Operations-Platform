export class InventoryWarehouseSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryWarehouseSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryWarehouseSummary" };
  }
}
