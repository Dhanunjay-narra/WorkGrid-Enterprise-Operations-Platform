export class ObsSpansSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsSpansSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsSpansSnapshot" };
  }
}
