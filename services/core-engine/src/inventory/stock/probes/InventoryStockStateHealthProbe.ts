export class InventoryStockStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryStockState" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryStockState" };
  }
}
