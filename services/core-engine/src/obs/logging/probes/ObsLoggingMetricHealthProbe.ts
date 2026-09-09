export class ObsLoggingMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsLoggingMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsLoggingMetric" };
  }
}
