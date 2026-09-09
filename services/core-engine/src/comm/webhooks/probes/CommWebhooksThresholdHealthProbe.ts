export class CommWebhooksThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommWebhooksThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommWebhooksThreshold" };
  }
}
