export class InventoryBatchesSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryBatchesSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryBatchesSession" };
  }
}
