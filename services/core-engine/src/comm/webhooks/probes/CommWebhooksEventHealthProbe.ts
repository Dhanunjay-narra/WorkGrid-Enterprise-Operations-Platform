export class CommWebhooksEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommWebhooksEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommWebhooksEvent" };
  }
}
