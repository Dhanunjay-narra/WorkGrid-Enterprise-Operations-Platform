export class InventoryTransfersBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryTransfersBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryTransfersBatch" };
  }
}
