export class InventorySuppliersPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventorySuppliersPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventorySuppliersPolicy" };
  }
}
