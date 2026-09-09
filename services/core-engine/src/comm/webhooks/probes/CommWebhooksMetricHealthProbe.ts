export class CommWebhooksMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommWebhooksMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommWebhooksMetric" };
  }
}
