export class InventoryBatchesEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryBatchesEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryBatchesEntry" };
  }
}
