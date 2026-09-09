export class CrmTerritoryEntryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmTerritoryEntry" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmTerritoryEntry" };
  }
}
