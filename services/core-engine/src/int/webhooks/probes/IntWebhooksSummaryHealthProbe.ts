export class IntWebhooksSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntWebhooksSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntWebhooksSummary" };
  }
}
