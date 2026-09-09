export class ObsDashboardsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsDashboardsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsDashboardsTask" };
  }
}
