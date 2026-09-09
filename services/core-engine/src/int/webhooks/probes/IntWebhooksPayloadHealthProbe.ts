export class IntWebhooksPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntWebhooksPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntWebhooksPayload" };
  }
}
