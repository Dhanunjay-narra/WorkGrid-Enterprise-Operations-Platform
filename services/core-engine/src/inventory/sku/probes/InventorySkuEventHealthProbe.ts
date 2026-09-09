export class InventorySkuEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventorySkuEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventorySkuEvent" };
  }
}
