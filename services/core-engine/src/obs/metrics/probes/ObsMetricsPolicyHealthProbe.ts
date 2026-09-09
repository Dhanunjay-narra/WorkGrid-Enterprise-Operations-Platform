export class ObsMetricsPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsMetricsPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsMetricsPolicy" };
  }
}
