export class ObsMetricsRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsMetricsRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsMetricsRule" };
  }
}
