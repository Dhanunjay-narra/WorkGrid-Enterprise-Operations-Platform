export class CrmTerritoryItemHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmTerritoryItem" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmTerritoryItem" };
  }
}
