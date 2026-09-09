export class InventorySkuRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventorySkuRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventorySkuRule" };
  }
}
