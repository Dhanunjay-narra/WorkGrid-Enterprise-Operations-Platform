export class CommThreadsSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommThreadsSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommThreadsSnapshot" };
  }
}
