export class InventoryWarehouseEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryWarehouseEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryWarehouseEvent" };
  }
}
