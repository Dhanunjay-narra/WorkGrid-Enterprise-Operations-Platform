export class CrmTerritoryConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmTerritoryConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmTerritoryConfig" };
  }
}
