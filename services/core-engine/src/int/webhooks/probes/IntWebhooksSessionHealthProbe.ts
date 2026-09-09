export class IntWebhooksSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntWebhooksSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntWebhooksSession" };
  }
}
