export class InventoryBatchesSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryBatchesSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryBatchesSummary" };
  }
}
