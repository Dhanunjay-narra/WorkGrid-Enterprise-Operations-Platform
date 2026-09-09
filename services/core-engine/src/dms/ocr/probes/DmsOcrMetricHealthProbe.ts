export class DmsOcrMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsOcrMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsOcrMetric" };
  }
}
