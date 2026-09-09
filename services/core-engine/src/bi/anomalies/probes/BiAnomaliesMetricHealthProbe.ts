export class BiAnomaliesMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiAnomaliesMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiAnomaliesMetric" };
  }
}
