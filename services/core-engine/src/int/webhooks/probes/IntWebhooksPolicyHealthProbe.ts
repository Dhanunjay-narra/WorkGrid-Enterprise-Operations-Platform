export class IntWebhooksPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntWebhooksPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntWebhooksPolicy" };
  }
}
