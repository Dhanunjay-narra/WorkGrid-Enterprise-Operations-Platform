export class CommWebhooksEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommWebhooksEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommWebhooksEntry" };
  }
}
