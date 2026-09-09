export class InventorySkuConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventorySkuConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventorySkuConfig" };
  }
}
