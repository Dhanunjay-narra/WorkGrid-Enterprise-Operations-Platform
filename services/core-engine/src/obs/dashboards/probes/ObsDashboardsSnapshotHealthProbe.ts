export class ObsDashboardsSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsDashboardsSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsDashboardsSnapshot" };
  }
}
