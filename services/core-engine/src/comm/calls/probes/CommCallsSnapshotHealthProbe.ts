export class CommCallsSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommCallsSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommCallsSnapshot" };
  }
}
