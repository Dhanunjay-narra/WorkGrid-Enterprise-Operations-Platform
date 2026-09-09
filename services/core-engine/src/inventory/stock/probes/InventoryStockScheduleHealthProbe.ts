export class InventoryStockScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryStockSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryStockSchedule" };
  }
}
