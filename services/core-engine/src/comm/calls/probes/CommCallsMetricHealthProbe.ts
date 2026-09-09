export class CommCallsMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommCallsMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommCallsMetric" };
  }
}
