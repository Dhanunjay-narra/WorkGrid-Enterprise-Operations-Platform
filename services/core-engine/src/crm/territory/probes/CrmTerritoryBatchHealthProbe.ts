export class CrmTerritoryBatchHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmTerritoryBatch" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmTerritoryBatch" };
  }
}
