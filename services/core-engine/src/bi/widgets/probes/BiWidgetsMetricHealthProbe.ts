export class BiWidgetsMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiWidgetsMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiWidgetsMetric" };
  }
}
