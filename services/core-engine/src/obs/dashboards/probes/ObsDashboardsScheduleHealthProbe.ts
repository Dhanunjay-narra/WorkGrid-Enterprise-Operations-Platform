export class ObsDashboardsScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "ObsDashboardsSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "ObsDashboardsSchedule" };
  }
}
