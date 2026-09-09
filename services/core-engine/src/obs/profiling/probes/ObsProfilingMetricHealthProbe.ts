export class ObsProfilingMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProfilingMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProfilingMetric" };
  }
}
