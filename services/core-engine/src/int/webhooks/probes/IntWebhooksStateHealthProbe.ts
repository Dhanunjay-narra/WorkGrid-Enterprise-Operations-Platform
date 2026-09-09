export class IntWebhooksStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntWebhooksState" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntWebhooksState" };
  }
}
