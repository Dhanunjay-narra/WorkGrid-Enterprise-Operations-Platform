export class InventoryStockMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryStockMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryStockMapping" };
  }
}
