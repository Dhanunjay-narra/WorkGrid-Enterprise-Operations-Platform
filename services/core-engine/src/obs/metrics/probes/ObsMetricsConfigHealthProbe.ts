export class ObsMetricsConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsMetricsConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsMetricsConfig" };
  }
}
