export class EventsReplayScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsReplaySchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsReplaySchedule" };
  }
}
