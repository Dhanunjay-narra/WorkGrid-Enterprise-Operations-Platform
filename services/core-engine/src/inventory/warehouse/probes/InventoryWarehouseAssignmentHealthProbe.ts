export class InventoryWarehouseAssignmentHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryWarehouseAssignment" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryWarehouseAssignment" };
  }
}
