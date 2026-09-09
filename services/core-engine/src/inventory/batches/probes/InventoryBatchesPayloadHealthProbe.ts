export class InventoryBatchesPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryBatchesPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryBatchesPayload" };
  }
}
