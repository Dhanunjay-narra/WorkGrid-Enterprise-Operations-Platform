export class ObsDashboardsMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsDashboardsMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsDashboardsMetric" };
  }
}
