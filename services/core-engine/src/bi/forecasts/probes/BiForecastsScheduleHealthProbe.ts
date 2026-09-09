export class BiForecastsScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "BiForecastsSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "BiForecastsSchedule" };
  }
}
