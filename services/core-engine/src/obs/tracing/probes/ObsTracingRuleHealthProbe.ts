export class ObsTracingRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsTracingRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsTracingRule" };
  }
}
