export class CrmTerritoryRuleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmTerritoryRule" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmTerritoryRule" };
  }
}
