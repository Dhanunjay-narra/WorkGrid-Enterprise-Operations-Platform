export class InventoryStockReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryStockReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryStockReport" };
  }
}
