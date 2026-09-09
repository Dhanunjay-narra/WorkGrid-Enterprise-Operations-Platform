export class BiDashboardsEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiDashboardsEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiDashboardsEvent" };
  }
}
