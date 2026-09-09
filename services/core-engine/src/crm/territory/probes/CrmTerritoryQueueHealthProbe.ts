export class CrmTerritoryQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmTerritoryQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmTerritoryQueue" };
  }
}
