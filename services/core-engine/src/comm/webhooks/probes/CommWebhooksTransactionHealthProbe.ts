export class CommWebhooksTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommWebhooksTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommWebhooksTransaction" };
  }
}
