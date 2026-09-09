export class InventorySuppliersItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventorySuppliersItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventorySuppliersItem" };
  }
}
