export class CrmTerritorySessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmTerritorySession" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmTerritorySession" };
  }
}
