export class InventorySuppliersStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventorySuppliersState" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventorySuppliersState" };
  }
}
