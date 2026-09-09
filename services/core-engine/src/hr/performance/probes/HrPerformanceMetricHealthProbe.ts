export class HrPerformanceMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPerformanceMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPerformanceMetric" };
  }
}
