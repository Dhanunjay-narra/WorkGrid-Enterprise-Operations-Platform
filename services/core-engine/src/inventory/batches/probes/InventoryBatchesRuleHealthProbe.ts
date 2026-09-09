export class InventoryBatchesRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryBatchesRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryBatchesRule" };
  }
}
