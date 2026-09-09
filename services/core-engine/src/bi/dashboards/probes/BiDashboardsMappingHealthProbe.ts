export class BiDashboardsMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiDashboardsMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiDashboardsMapping" };
  }
}
