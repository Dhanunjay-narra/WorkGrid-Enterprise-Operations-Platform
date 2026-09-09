export class InventoryOrdersTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryOrdersTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryOrdersTask" };
  }
}
