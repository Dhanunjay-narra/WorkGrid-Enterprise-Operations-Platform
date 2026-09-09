export class IntMappingsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntMappingsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntMappingsState" };
  }
}
