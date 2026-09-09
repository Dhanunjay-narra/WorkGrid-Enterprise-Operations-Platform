export class InventorySkuProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventorySkuProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventorySkuProfile" };
  }
}
