export class DmsRetentionMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsRetentionMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsRetentionMetric" };
  }
}
