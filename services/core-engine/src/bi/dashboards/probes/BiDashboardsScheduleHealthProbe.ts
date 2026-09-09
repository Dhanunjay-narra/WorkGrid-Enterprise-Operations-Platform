export class BiDashboardsScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiDashboardsSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiDashboardsSchedule" };
  }
}
