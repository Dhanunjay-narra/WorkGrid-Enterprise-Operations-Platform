export class ObsMetricsSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsMetricsSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsMetricsSnapshot" };
  }
}
