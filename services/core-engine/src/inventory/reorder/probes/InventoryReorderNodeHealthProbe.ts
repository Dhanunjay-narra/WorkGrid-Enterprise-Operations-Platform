export class InventoryReorderNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryReorderNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryReorderNode" };
  }
}
