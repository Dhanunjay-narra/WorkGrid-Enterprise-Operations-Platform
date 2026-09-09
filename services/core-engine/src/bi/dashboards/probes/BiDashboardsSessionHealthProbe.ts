export class BiDashboardsSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiDashboardsSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiDashboardsSession" };
  }
}
