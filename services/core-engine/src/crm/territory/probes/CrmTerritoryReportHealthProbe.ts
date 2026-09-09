export class CrmTerritoryReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmTerritoryReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmTerritoryReport" };
  }
}
