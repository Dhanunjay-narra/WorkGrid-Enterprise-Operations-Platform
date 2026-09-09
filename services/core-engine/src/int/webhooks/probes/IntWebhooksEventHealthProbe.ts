export class IntWebhooksEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntWebhooksEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntWebhooksEvent" };
  }
}
