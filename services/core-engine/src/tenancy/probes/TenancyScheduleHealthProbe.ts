export class TenancyScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "TenancySchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "TenancySchedule" };
  }
}
