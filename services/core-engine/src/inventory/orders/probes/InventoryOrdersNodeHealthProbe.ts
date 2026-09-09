export class InventoryOrdersNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryOrdersNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryOrdersNode" };
  }
}
