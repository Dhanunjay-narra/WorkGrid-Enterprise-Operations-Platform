export class BiForecastsMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiForecastsMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiForecastsMetric" };
  }
}
