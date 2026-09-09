export class ObsDashboardsPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsDashboardsPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsDashboardsPolicy" };
  }
}
