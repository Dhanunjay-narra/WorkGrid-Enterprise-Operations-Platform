export class IntWebhooksNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntWebhooksNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntWebhooksNode" };
  }
}
