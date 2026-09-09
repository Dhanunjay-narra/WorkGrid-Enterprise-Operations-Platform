export class BiDashboardsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiDashboardsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiDashboardsQueue" };
  }
}
