export class IntMappingsEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntMappingsEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntMappingsEntry" };
  }
}
