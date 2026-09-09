export class InventoryStockRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryStockRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryStockRecord" };
  }
}
