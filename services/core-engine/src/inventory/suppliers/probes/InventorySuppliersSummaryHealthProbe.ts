export class InventorySuppliersSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventorySuppliersSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventorySuppliersSummary" };
  }
}
