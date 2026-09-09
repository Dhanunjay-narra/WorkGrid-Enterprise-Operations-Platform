export class ObsDashboardsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsDashboardsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsDashboardsQueue" };
  }
}
