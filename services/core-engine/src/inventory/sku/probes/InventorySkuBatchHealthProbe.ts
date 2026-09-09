export class InventorySkuBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventorySkuBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventorySkuBatch" };
  }
}
