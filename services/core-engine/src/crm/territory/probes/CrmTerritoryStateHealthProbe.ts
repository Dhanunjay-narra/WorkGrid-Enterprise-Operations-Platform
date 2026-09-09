export class CrmTerritoryStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmTerritoryState" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmTerritoryState" };
  }
}
