export class CrmAccountsScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmAccountsSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmAccountsSchedule" };
  }
}
