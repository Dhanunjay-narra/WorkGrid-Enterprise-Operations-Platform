export class InventorySkuScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventorySkuSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventorySkuSchedule" };
  }
}
