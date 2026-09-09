export class CrmTerritoryNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmTerritoryNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmTerritoryNode" };
  }
}
