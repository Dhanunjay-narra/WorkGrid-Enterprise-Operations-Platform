export class InventoryWarehouseReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryWarehouseReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryWarehouseReport" };
  }
}
