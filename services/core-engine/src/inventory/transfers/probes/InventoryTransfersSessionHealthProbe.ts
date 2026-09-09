export class InventoryTransfersSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryTransfersSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryTransfersSession" };
  }
}
