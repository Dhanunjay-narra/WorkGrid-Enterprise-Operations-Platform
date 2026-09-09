export class InventoryStockSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryStockSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryStockSession" };
  }
}
