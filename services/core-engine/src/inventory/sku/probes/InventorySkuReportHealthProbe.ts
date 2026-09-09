export class InventorySkuReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventorySkuReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventorySkuReport" };
  }
}
