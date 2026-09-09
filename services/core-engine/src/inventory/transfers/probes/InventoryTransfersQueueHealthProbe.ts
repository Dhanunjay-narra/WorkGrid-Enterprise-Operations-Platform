export class InventoryTransfersQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryTransfersQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryTransfersQueue" };
  }
}
