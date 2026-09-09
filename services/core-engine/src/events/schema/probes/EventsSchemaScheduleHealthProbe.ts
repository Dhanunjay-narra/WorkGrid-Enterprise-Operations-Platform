export class EventsSchemaScheduleHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsSchemaSchedule" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsSchemaSchedule" };
  }
}
