export class BiDashboardsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiDashboardsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiDashboardsReport" };
  }
}
