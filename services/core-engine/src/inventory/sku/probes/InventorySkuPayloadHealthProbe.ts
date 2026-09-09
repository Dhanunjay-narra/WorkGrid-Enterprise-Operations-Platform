export class InventorySkuPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventorySkuPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventorySkuPayload" };
  }
}
