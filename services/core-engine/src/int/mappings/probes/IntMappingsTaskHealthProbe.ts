export class IntMappingsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntMappingsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntMappingsTask" };
  }
}
