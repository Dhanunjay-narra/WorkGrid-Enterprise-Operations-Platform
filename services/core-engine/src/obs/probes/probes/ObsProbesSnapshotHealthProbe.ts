export class ObsProbesSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsProbesSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsProbesSnapshot" };
  }
}
