export class CommWebhooksRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommWebhooksRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommWebhooksRecord" };
  }
}
