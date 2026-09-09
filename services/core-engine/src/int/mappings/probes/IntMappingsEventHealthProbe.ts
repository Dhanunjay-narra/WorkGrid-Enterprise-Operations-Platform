export class IntMappingsEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntMappingsEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntMappingsEvent" };
  }
}
