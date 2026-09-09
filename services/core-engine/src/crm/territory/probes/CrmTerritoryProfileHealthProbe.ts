export class CrmTerritoryProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmTerritoryProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmTerritoryProfile" };
  }
}
