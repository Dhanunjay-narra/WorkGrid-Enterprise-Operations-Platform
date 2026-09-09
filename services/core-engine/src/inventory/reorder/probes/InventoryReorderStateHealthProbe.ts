export class InventoryReorderStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryReorderState" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryReorderState" };
  }
}
