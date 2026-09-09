export class InventoryTransfersPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryTransfersPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryTransfersPayload" };
  }
}
