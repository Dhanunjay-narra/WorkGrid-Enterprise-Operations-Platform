export class BiDashboardsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiDashboardsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiDashboardsState" };
  }
}
