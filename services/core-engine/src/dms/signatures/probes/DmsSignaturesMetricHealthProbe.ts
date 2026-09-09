export class DmsSignaturesMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsSignaturesMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsSignaturesMetric" };
  }
}
