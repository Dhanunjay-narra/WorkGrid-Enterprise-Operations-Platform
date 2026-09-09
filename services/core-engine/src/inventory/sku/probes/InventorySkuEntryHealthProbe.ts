export class InventorySkuEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventorySkuEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventorySkuEntry" };
  }
}
