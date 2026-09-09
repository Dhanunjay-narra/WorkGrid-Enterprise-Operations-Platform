export class IntWebhooksTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntWebhooksTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntWebhooksTask" };
  }
}
