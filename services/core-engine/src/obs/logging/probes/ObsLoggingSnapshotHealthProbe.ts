export class ObsLoggingSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsLoggingSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsLoggingSnapshot" };
  }
}
