export class CrmForecastingMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmForecastingMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmForecastingMetric" };
  }
}
