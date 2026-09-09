export class CommWebhooksBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommWebhooksBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommWebhooksBatch" };
  }
}
