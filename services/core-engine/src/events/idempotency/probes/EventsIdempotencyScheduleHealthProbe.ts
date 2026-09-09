export class EventsIdempotencyScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsIdempotencySchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsIdempotencySchedule" };
  }
}
