export class InventorySkuNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventorySkuNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventorySkuNode" };
  }
}
