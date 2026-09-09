export class CommWebhooksReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommWebhooksReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommWebhooksReport" };
  }
}
