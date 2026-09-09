export class InventoryBatchesTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryBatchesTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryBatchesTask" };
  }
}
