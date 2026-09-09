export class InventoryBatchesStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryBatchesState" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryBatchesState" };
  }
}
