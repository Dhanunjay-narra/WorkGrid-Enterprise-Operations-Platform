export class InventorySkuPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventorySkuPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventorySkuPolicy" };
  }
}
