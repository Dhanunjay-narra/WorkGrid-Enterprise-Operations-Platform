export class ObsDashboardsMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsDashboardsMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsDashboardsMapping" };
  }
}
