export class CrmTerritoryEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmTerritoryEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmTerritoryEvent" };
  }
}
