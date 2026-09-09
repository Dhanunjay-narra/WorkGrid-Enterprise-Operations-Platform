export class BiDashboardsSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiDashboardsSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiDashboardsSummary" };
  }
}
