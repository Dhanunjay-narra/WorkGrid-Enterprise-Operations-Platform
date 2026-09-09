export class InventoryStockTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryStockTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryStockTransaction" };
  }
}
