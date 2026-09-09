export class CommWebhooksRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommWebhooksRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommWebhooksRule" };
  }
}
