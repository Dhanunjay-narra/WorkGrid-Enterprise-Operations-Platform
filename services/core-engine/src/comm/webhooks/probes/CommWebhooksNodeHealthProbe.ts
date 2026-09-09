export class CommWebhooksNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommWebhooksNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommWebhooksNode" };
  }
}
