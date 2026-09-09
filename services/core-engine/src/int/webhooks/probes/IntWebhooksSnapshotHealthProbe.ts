export class IntWebhooksSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntWebhooksSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntWebhooksSnapshot" };
  }
}
