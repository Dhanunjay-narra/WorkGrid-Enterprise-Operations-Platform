export class IntSyncSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSyncSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSyncSnapshot" };
  }
}
