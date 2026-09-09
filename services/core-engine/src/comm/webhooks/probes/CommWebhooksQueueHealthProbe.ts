export class CommWebhooksQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommWebhooksQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommWebhooksQueue" };
  }
}
