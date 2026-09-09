export class InventorySuppliersTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventorySuppliersTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventorySuppliersTask" };
  }
}
