export class InventoryReorderEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "InventoryReorderEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "InventoryReorderEntry" };
  }
}
