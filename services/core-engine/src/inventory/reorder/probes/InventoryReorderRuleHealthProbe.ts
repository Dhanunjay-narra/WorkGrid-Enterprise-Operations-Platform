export class InventoryReorderRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryReorderRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryReorderRule" };
  }
}
