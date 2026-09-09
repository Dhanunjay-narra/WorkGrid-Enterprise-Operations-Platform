export class InventorySkuRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventorySkuRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventorySkuRecord" };
  }
}
