export class InventoryTransfersReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryTransfersReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryTransfersReport" };
  }
}
