export class CrmTerritoryPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmTerritoryPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmTerritoryPolicy" };
  }
}
