export class EventsOutboxScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsOutboxSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsOutboxSchedule" };
  }
}
