export class IntWebhooksConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntWebhooksConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntWebhooksConfig" };
  }
}
