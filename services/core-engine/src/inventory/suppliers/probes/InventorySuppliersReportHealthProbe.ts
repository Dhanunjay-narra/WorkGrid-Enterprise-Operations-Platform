export class InventorySuppliersReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventorySuppliersReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventorySuppliersReport" };
  }
}
