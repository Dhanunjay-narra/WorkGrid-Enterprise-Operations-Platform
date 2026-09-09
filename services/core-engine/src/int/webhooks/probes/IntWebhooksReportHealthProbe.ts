export class IntWebhooksReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntWebhooksReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntWebhooksReport" };
  }
}
