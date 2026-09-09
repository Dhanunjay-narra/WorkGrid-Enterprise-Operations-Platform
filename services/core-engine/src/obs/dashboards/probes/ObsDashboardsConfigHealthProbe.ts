export class ObsDashboardsConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsDashboardsConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsDashboardsConfig" };
  }
}
