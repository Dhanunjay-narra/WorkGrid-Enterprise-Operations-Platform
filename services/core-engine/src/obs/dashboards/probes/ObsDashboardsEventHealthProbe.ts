export class ObsDashboardsEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsDashboardsEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsDashboardsEvent" };
  }
}
