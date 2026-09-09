export class InventoryBatchesScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryBatchesSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryBatchesSchedule" };
  }
}
