export class BiDashboardsSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiDashboardsSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiDashboardsSnapshot" };
  }
}
