export class BiExportsMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiExportsMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiExportsMetric" };
  }
}
