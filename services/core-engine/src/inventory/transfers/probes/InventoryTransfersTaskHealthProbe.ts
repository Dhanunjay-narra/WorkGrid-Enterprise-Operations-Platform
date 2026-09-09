export class InventoryTransfersTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryTransfersTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryTransfersTask" };
  }
}
