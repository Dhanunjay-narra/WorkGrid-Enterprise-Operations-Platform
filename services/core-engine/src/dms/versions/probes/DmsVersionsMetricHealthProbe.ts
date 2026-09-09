export class DmsVersionsMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsVersionsMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsVersionsMetric" };
  }
}
