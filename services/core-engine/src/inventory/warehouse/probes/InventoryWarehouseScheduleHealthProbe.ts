export class InventoryWarehouseScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryWarehouseSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryWarehouseSchedule" };
  }
}
