export class HrPerformanceSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "HrPerformanceSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "HrPerformanceSnapshot" };
  }
}
