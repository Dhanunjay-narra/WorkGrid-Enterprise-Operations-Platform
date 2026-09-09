export class CrmTerritoryMetricHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmTerritoryMetric" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmTerritoryMetric" };
  }
}
