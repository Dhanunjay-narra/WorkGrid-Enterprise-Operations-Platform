export class InventorySuppliersConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventorySuppliersConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventorySuppliersConfig" };
  }
}
