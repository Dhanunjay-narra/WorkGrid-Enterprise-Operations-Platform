export class InventoryStockTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryStockTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryStockTask" };
  }
}
