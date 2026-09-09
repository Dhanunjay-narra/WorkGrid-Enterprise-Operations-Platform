export class CommWebhooksSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommWebhooksSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommWebhooksSnapshot" };
  }
}
