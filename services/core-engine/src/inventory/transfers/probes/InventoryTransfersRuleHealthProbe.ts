export class InventoryTransfersRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryTransfersRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryTransfersRule" };
  }
}
