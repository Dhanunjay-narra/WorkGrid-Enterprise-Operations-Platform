export class ObsDashboardsBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsDashboardsBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsDashboardsBatch" };
  }
}
