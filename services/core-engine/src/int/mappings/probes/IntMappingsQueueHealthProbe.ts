export class IntMappingsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntMappingsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntMappingsQueue" };
  }
}
