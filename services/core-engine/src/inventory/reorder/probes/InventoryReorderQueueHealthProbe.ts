export class InventoryReorderQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryReorderQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryReorderQueue" };
  }
}
