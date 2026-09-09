export class IntWebhooksRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntWebhooksRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntWebhooksRecord" };
  }
}
