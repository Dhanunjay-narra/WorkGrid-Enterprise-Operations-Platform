export class InventoryBatchesTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryBatchesTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryBatchesTransaction" };
  }
}
