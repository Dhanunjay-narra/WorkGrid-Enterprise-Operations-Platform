export class ObsTracingSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsTracingSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsTracingSnapshot" };
  }
}
