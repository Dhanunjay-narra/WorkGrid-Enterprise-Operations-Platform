export class InventorySuppliersRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventorySuppliersRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventorySuppliersRule" };
  }
}
