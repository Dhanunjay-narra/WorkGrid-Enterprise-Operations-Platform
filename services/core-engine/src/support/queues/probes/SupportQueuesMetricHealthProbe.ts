export class SupportQueuesMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportQueuesMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportQueuesMetric" };
  }
}
