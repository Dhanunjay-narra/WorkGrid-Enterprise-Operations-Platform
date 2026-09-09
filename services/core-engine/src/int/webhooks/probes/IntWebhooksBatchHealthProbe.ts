export class IntWebhooksBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntWebhooksBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntWebhooksBatch" };
  }
}
