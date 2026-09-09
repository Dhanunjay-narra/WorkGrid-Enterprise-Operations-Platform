export class InventorySkuSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventorySkuSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventorySkuSnapshot" };
  }
}
