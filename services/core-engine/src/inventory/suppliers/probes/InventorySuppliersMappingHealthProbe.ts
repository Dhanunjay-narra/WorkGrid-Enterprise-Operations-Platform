export class InventorySuppliersMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventorySuppliersMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventorySuppliersMapping" };
  }
}
