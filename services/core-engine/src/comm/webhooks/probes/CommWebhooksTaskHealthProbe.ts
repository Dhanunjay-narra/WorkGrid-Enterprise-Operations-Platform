export class CommWebhooksTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommWebhooksTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommWebhooksTask" };
  }
}
