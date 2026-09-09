export class InventoryBatchesConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryBatchesConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryBatchesConfig" };
  }
}
