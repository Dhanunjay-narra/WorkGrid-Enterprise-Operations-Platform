export class ObsDashboardsSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsDashboardsSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsDashboardsSession" };
  }
}
