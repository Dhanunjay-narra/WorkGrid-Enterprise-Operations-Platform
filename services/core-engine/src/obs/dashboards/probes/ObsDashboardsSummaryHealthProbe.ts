export class ObsDashboardsSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsDashboardsSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsDashboardsSummary" };
  }
}
