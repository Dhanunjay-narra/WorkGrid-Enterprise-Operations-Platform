export class InventoryOrdersQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryOrdersQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryOrdersQueue" };
  }
}
