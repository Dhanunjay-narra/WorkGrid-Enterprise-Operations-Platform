export class CrmTerritoryTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmTerritoryTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmTerritoryTransaction" };
  }
}
