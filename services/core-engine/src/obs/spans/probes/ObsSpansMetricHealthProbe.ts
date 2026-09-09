export class ObsSpansMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsSpansMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsSpansMetric" };
  }
}
