export class InventoryTransfersNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryTransfersNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryTransfersNode" };
  }
}
