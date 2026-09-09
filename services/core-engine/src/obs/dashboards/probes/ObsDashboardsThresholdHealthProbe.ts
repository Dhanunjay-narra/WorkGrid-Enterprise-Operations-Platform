export class ObsDashboardsThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsDashboardsThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsDashboardsThreshold" };
  }
}
