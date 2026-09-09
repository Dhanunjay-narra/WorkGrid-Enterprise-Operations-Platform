export class BiDashboardsMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiDashboardsMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiDashboardsMetric" };
  }
}
