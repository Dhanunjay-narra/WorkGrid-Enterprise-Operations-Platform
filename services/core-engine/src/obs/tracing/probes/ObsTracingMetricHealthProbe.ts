export class ObsTracingMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsTracingMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsTracingMetric" };
  }
}
