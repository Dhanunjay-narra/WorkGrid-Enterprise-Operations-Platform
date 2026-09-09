export class ObsDashboardsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsDashboardsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsDashboardsNode" };
  }
}
