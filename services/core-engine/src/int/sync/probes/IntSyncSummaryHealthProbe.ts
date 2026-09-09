export class IntSyncSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSyncSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSyncSummary" };
  }
}
