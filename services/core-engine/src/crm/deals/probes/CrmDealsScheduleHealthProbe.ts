export class CrmDealsScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmDealsSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmDealsSchedule" };
  }
}
