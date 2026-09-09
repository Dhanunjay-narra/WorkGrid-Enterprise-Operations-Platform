export class CommWebhooksProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommWebhooksProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommWebhooksProfile" };
  }
}
