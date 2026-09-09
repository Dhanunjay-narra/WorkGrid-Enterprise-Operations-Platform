export class InventorySuppliersTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventorySuppliersTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventorySuppliersTransaction" };
  }
}
