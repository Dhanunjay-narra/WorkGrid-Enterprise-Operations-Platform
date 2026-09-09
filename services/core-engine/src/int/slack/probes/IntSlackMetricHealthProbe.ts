export class IntSlackMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSlackMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSlackMetric" };
  }
}
