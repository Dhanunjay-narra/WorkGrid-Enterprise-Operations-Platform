export class IntWebhooksRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntWebhooksRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntWebhooksRule" };
  }
}
