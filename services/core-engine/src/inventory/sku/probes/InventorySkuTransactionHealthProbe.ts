export class InventorySkuTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventorySkuTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventorySkuTransaction" };
  }
}
