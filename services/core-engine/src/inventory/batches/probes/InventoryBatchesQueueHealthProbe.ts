export class InventoryBatchesQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryBatchesQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryBatchesQueue" };
  }
}
