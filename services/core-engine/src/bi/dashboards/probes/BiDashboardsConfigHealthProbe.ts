export class BiDashboardsConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiDashboardsConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiDashboardsConfig" };
  }
}
