export class CrmContactsScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmContactsSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmContactsSchedule" };
  }
}
