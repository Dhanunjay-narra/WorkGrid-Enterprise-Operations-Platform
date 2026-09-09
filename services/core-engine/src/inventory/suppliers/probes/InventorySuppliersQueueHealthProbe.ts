export class InventorySuppliersQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventorySuppliersQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventorySuppliersQueue" };
  }
}
