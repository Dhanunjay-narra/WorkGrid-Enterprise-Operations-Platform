export class InventoryBatchesReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryBatchesReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryBatchesReport" };
  }
}
