export class ObsDashboardsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsDashboardsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsDashboardsState" };
  }
}
