export class BiDashboardsThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiDashboardsThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiDashboardsThreshold" };
  }
}
