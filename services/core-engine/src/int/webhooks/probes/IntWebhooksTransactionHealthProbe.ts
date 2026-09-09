export class IntWebhooksTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntWebhooksTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntWebhooksTransaction" };
  }
}
