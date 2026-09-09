export class ObsMetricsMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsMetricsMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsMetricsMetric" };
  }
}
