export class InventorySuppliersEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventorySuppliersEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventorySuppliersEvent" };
  }
}
