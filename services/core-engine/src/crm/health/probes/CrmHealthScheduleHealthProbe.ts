export class CrmHealthScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmHealthSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmHealthSchedule" };
  }
}
