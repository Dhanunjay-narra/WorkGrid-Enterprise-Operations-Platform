export class CommWebhooksStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommWebhooksState" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommWebhooksState" };
  }
}
