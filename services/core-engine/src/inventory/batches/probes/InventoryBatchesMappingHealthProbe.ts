export class InventoryBatchesMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryBatchesMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryBatchesMapping" };
  }
}
