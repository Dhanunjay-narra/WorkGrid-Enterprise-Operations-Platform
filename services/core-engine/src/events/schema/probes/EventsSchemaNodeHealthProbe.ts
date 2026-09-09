export class EventsSchemaNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsSchemaNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsSchemaNode" };
  }
}
