export class IntWebhooksEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntWebhooksEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntWebhooksEntry" };
  }
}
