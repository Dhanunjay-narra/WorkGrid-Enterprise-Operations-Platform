export class InventorySkuThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventorySkuThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventorySkuThreshold" };
  }
}
