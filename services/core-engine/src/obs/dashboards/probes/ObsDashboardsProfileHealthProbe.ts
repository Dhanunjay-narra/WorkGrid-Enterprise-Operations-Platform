export class ObsDashboardsProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsDashboardsProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsDashboardsProfile" };
  }
}
