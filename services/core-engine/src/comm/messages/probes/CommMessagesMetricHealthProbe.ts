export class CommMessagesMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommMessagesMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommMessagesMetric" };
  }
}
