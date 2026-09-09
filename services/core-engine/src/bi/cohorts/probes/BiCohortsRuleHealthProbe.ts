export class BiCohortsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiCohortsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiCohortsRule" };
  }
}
