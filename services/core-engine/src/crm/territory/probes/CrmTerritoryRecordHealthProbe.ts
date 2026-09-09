export class CrmTerritoryRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmTerritoryRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmTerritoryRecord" };
  }
}
