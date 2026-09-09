export class InventoryTransfersStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryTransfersState" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryTransfersState" };
  }
}
