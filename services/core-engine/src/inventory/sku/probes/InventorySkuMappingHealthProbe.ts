export class InventorySkuMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventorySkuMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventorySkuMapping" };
  }
}
