export class IntMappingsProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntMappingsProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntMappingsProfile" };
  }
}
