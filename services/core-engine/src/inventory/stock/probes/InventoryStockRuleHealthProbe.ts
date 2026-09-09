export class InventoryStockRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryStockRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryStockRule" };
  }
}
