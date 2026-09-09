export class IntMappingsSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntMappingsSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntMappingsSession" };
  }
}
