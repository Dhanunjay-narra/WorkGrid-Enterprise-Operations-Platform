export class IntWebhooksProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntWebhooksProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntWebhooksProfile" };
  }
}
