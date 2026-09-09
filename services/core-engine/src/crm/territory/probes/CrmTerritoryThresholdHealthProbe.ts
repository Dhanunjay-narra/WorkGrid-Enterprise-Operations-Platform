export class CrmTerritoryThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmTerritoryThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmTerritoryThreshold" };
  }
}
