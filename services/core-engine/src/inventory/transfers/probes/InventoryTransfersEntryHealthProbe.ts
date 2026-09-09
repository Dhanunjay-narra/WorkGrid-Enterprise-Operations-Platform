export class InventoryTransfersEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryTransfersEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryTransfersEntry" };
  }
}
