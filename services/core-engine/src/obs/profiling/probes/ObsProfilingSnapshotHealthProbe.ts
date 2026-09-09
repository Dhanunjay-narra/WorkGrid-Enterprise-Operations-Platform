export class ObsProfilingSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProfilingSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProfilingSnapshot" };
  }
}
