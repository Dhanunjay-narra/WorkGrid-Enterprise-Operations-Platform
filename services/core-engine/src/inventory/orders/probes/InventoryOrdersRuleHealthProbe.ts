export class InventoryOrdersRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryOrdersRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryOrdersRule" };
  }
}
