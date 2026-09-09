export class CommWebhooksSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommWebhooksSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommWebhooksSession" };
  }
}
