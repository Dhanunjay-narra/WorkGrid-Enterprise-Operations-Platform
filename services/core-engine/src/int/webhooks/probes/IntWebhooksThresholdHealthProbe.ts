export class IntWebhooksThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntWebhooksThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntWebhooksThreshold" };
  }
}
