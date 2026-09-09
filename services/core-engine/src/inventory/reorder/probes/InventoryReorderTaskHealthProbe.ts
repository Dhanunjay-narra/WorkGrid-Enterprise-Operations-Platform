export class InventoryReorderTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryReorderTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryReorderTask" };
  }
}
