export class BiDashboardsPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiDashboardsPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiDashboardsPolicy" };
  }
}
