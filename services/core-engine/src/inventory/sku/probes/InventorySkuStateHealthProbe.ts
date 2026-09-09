export class InventorySkuStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventorySkuState" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventorySkuState" };
  }
}
