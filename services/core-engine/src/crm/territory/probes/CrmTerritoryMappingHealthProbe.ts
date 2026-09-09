export class CrmTerritoryMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmTerritoryMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmTerritoryMapping" };
  }
}
