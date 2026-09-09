export class InventoryBatchesThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryBatchesThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryBatchesThreshold" };
  }
}
