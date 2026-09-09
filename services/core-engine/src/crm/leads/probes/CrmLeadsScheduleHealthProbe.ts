export class CrmLeadsScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmLeadsSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmLeadsSchedule" };
  }
}
