export class ObsDashboardsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsDashboardsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsDashboardsReport" };
  }
}
