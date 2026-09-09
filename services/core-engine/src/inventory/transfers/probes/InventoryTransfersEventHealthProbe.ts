export class InventoryTransfersEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryTransfersEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryTransfersEvent" };
  }
}
