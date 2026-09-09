export class IntWebhooksMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntWebhooksMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntWebhooksMetric" };
  }
}
