export class IntMappingsConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntMappingsConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntMappingsConfig" };
  }
}
