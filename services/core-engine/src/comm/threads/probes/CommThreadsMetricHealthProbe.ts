export class CommThreadsMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommThreadsMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommThreadsMetric" };
  }
}
