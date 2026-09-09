export class EventsMetricsScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsMetricsSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsMetricsSchedule" };
  }
}
