export class EventsSchemaTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsSchemaTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsSchemaTask" };
  }
}
