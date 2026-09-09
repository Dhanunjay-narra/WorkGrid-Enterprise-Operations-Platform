export class BiDashboardsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiDashboardsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiDashboardsTask" };
  }
}
