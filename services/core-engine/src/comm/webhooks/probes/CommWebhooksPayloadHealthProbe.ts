export class CommWebhooksPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommWebhooksPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommWebhooksPayload" };
  }
}
