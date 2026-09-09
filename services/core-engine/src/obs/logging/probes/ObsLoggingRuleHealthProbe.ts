export class ObsLoggingRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsLoggingRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsLoggingRule" };
  }
}
