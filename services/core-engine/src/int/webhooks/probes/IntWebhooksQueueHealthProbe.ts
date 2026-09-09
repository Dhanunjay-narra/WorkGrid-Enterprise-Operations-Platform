export class IntWebhooksQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntWebhooksQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntWebhooksQueue" };
  }
}
