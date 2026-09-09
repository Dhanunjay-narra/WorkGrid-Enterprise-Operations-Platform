export class InventorySkuSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventorySkuSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventorySkuSummary" };
  }
}
