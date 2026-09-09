export class InventoryBatchesNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryBatchesNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryBatchesNode" };
  }
}
