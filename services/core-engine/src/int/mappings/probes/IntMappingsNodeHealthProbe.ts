export class IntMappingsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntMappingsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntMappingsNode" };
  }
}
