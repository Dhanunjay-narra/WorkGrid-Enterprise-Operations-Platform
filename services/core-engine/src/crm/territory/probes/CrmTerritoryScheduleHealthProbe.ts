export class CrmTerritoryScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmTerritorySchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmTerritorySchedule" };
  }
}
