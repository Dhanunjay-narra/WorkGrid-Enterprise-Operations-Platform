export class BiQueriesMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiQueriesMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiQueriesMetric" };
  }
}
