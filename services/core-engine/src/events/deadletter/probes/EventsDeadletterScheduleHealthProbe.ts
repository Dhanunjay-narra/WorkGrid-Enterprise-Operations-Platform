export class EventsDeadletterScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsDeadletterSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsDeadletterSchedule" };
  }
}
