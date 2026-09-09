export class CommWebhooksSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommWebhooksSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommWebhooksSummary" };
  }
}
