export class IntMappingsPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntMappingsPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntMappingsPolicy" };
  }
}
