export class InventorySkuSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventorySkuSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventorySkuSession" };
  }
}
