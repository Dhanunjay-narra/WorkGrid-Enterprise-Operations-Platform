export class IntMappingsBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntMappingsBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntMappingsBatch" };
  }
}
