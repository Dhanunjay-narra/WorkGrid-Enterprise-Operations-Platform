export class BiKpisMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiKpisMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiKpisMetric" };
  }
}
