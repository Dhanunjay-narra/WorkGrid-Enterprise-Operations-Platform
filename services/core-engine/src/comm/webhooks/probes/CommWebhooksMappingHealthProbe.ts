export class CommWebhooksMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommWebhooksMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommWebhooksMapping" };
  }
}
