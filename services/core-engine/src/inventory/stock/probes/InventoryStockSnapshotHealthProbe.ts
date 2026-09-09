export class InventoryStockSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryStockSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryStockSnapshot" };
  }
}
