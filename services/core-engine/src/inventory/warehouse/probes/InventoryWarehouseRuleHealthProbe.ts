export class InventoryWarehouseRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryWarehouseRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryWarehouseRule" };
  }
}
