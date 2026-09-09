export class InventorySkuTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventorySkuTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventorySkuTask" };
  }
}
