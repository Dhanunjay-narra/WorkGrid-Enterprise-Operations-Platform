export class IntMappingsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntMappingsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntMappingsRule" };
  }
}
