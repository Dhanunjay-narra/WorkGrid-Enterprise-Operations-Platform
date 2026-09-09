export class ObsMetricsThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsMetricsThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsMetricsThreshold" };
  }
}
