export class IntMappingsMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntMappingsMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntMappingsMapping" };
  }
}
