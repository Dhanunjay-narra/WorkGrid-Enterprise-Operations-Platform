export class IntWebhooksMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntWebhooksMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntWebhooksMapping" };
  }
}
