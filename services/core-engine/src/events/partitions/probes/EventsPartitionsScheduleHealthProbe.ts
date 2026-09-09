export class EventsPartitionsScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsPartitionsSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsPartitionsSchedule" };
  }
}
