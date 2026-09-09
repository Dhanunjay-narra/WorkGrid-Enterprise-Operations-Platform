export class BiDashboardsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiDashboardsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiDashboardsNode" };
  }
}
