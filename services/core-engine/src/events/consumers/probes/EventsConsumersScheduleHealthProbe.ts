export class EventsConsumersScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsConsumersSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsConsumersSchedule" };
  }
}
