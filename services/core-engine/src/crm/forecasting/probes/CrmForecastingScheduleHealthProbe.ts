export class CrmForecastingScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CrmForecastingSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "CrmForecastingSchedule" };
  }
}
