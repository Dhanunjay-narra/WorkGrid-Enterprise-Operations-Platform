export class InventorySkuQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventorySkuQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventorySkuQueue" };
  }
}
