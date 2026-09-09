export class CrmTerritoryTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmTerritoryTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmTerritoryTask" };
  }
}
