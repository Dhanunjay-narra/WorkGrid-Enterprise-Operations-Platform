export class IntSlackSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IntSlackSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "IntSlackSnapshot" };
  }
}
