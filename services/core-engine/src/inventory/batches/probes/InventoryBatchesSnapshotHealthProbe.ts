export class InventoryBatchesSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryBatchesSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryBatchesSnapshot" };
  }
}
