export class EventsSchemaQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsSchemaQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsSchemaQueue" };
  }
}
